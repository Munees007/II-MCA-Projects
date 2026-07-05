import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

data = pd.read_csv("Dataset_visulize.csv")


# Bill Amount Distribution

plt.figure(figsize=(8,5))

plt.hist(
    data["TotalAmount"],
    bins=10,
    edgecolor="black"
)

plt.xlabel("Bill Amount")
plt.ylabel("Number of Bills")
plt.title("Bill Amount Distribution")

plt.show()



# Sales Summary Datewise

totalSalesByDate = data.groupby("BillDate")

categories = []
values = []

for date in totalSalesByDate.groups:
    perDateSum = totalSalesByDate.get_group(date)["TotalAmount"].sum()

    categories.append(str(date).split('-')[2])
    values.append(perDateSum)


plt.figure(figsize=(10,5))

plt.bar(categories, values)

plt.title("Sales Summary Datewise - April 2026")
plt.xlabel("Date")
plt.ylabel("Total Amount")

plt.xticks(rotation=45)

plt.show()



# Payment Distribution

pieLabels = [
    "BankAmount",
    "UPIAmount",
    "CashAmount",
    "CardAmount",
    "AdvancePayment"
]

paymentTotalPie = data[pieLabels].copy()

paymentTotalPie = paymentTotalPie.fillna(0)

values = paymentTotalPie.sum().tolist()


def absoluteValue(v):
    total = np.sum(values)
    amount = int(round(v/100 * total))
    return f"₹{amount}\n({v:.1f}%)"


plt.figure(figsize=(7,7))

plt.pie(
    values,
    labels=pieLabels,
    autopct=absoluteValue,
    startangle=90
)

plt.title("Payment Method Distribution")

plt.show()