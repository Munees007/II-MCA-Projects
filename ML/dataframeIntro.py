import pandas as pd

students = [
    {"roll_no": 101, "name": "Munees", "department": "MCA", "marks": 85, "city": "Madurai"},
    {"roll_no": 102, "name": "Karthik balan", "department": "MCA", "marks": 78, "city": "Sivakasi"},
    {"roll_no": 103, "name": "Sudharsan", "department": "MBA", "marks": 90, "city": "Chennai"},
    {"roll_no": 104, "name": "Ranjith", "department": "MCA", "marks": 88, "city": "Madurai"},
    {"roll_no": 105, "name": "Ganesh", "department": "BCA", "marks": 70, "city": "Virudhunagar"}
]

df = pd.DataFrame(students)

print("Original DataFrame:")
print(df)

print("\nFirst 3 rows:")
print(df.head(3))

print("\nLast 2 rows:")
print(df.tail(2))

print("\nShape of DataFrame:")
print(df.shape)

print("\nColumn names:")
print(df.columns)

print("\nData types:")
print(df.dtypes)

print("\nBasic information:")
print(df.info())

print("\nStatistical summary:")
print(df.describe())

print("\nSelect one column:")
print(df["name"])

print("\nSelect multiple columns:")
print(df[["name", "marks"]])

print("\nSelect rows using loc:")
print(df.loc[0:2])

print("\nSelect rows using iloc:")
print(df.iloc[0:3])

print("\nStudents with marks above 80:")
print(df[df["marks"] > 80])

print("\nStudents from MCA department:")
print(df[df["department"] == "MCA"])

print("\nSort by marks:")
print(df.sort_values(by="marks", ascending=False))

print("\nAdd new column grade:")
df["grade"] = df["marks"].apply(lambda x: "A" if x >= 85 else "B" if x >= 75 else "C")
print(df)

print("\nUpdate one value:")
df.loc[df["name"] == "Bala", "marks"] = 82
print(df)

print("\nGroup by department:")
print(df.groupby("department")["marks"].mean())

print("\nCount students by city:")
print(df["city"].value_counts())

print("\nRename column:")
df = df.rename(columns={"marks": "total_marks"})
print(df)

print("\nDrop city column:")
df = df.drop(columns=["city"])
print(df)

print("\nRemove duplicate rows:")
df = df.drop_duplicates()
print(df)