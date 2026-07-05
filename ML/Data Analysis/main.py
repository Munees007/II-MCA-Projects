import pandas as pd
import numpy as np

data = pd.read_csv("zomato.csv")

# see the columns and type
print(data.dtypes)

# remove unwanted columns
data.drop(columns=["reviews_list"],inplace=True)

# drop rows where name is not present
data["name"].dropna()

# fill na values
data["votes"].fillna(0)
data["rate"].fillna("0/5")
for column in data.columns:
    if column not in ["votes"]:
        data[column].fillna("")

# remove duplicates
def getWithoutDuplicates(d):
    return d.drop_duplicates(subset="name",keep="first")

# convert rate to float
def changeRate(d):
    if d in ["NEW","-"]:
        return 0
    rate = str(d).split("/")[0]
    return float(rate)

data["rate"] = data["rate"].apply(changeRate)
data["rate"] = pd.to_numeric(data["rate"],errors="coerce")

# Important Columns
impColumns = ["address","name","online_order","book_table","rate","location","cuisines","rest_type","dish_liked"]
gropuedColumns = ["name","rate"]
# Data analysis
# 1. Top Rated resturaents in each location
grouped_data = data.groupby("location")
for group in grouped_data.groups:
    print(f"\tLocation: {group}")
    grouped = grouped_data.get_group(group)
    sorted_data = grouped.sort_values(by="rate",ascending=False,na_position="last")
    sorted_data = getWithoutDuplicates(sorted_data)
    sorted_data = sorted_data.head(3)
    print(sorted_data[gropuedColumns])

# 2 Count How many online and offline orders 
totalCount = len(data)
onlineCount = 0
offlineCount = 0
def countOrder(d):
    if d.lower() == "yes":
        global onlineCount
        onlineCount += 1
    else:
        global offlineCount
        offlineCount += 1
data["online_order"].apply(countOrder)
print(f"Online Orders: {onlineCount}/{totalCount}")
print(f"Offline Orders: {offlineCount}/{totalCount}")

#3 Total Resturants and total by resturants type
resturantsData = getWithoutDuplicates(data)
print(f"Total Resturants: {len(resturantsData)}")
groupByRestType = resturantsData.groupby("rest_type")
for restGroup in groupByRestType.groups:
    currentGroupCount = groupByRestType.get_group(restGroup)["rest_type"].count()
    print(f"Resturant Type: {restGroup} = {currentGroupCount}")

#4 Average rating by restaurant type
avg_rating = resturantsData.groupby("rest_type")["rate"].mean().sort_values(ascending=False)

print("Average Rating by Restaurant Type:")
print(avg_rating.head(10))