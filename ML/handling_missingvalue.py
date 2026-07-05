import pandas as pd
import numpy as np

students = [
    {"roll_no": 101, "name": "Munees", "department": "MCA", "marks": 85, "city": "Madurai"},
    {"roll_no": 102, "name": "Karthik Balan", "department": None, "marks": 78, "city": "Sivakasi"},
    {"roll_no": 103, "name": None, "department": "MBA", "marks": np.nan, "city": None},
    {"roll_no": 104, "name": "Sudharsan", "department": "MCA", "marks": 88, "city": "Madurai"},
    {"roll_no": 105, "name": "Ranjith", "department": None, "marks": np.nan, "city": "Virudhunagar"},
    {"roll_no": 106, "name": None, "department": "BCA", "marks": 65, "city": None}
]

df = pd.DataFrame(students)

print("Original DataFrame:")
print(df)

print("\nCheck missing values True/False:")
print(df.isnull())

print("\nMissing values count:")
print(df.isnull().sum())

print("\nTotal missing values:")
print(df.isnull().sum().sum())

print("\nNon-missing values count:")
print(df.notnull().sum())

print("\nRows having any missing value:")
print(df[df.isnull().any(axis=1)])

print("\nRows without missing values:")
print(df.dropna())

print("\nDrop columns having missing values:")
print(df.dropna(axis=1))

print("\nDrop rows only if all values are missing:")
print(df.dropna(how="all"))

print("\nFill all missing values with common value:")
print(df.fillna("Unknown"))

print("\nFill missing name:")
df_name = df.copy()
df_name["name"] = df_name["name"].fillna("No Name")
print(df_name)

print("\nFill missing department:")
df_dept = df.copy()
df_dept["department"] = df_dept["department"].fillna("Not Assigned")
print(df_dept)

print("\nFill missing city:")
df_city = df.copy()
df_city["city"] = df_city["city"].fillna("Not Mentioned")
print(df_city)

print("\nFill missing marks with 0:")
df_zero = df.copy()
df_zero["marks"] = df_zero["marks"].fillna(0)
print(df_zero)

print("\nFill missing marks with mean:")
df_mean = df.copy()
df_mean["marks"] = df_mean["marks"].fillna(df_mean["marks"].mean())
print(df_mean)

print("\nFill missing marks with median:")
df_median = df.copy()
df_median["marks"] = df_median["marks"].fillna(df_median["marks"].median())
print(df_median)

print("\nFill missing department with mode:")
df_mode = df.copy()
df_mode["department"] = df_mode["department"].fillna(df_mode["department"].mode()[0])
print(df_mode)

print("\nForward fill:")
print(df.ffill())

print("\nBackward fill:")
print(df.bfill())

print("\nReplace None/NaN with custom values:")
df_replace = df.copy()
df_replace = df_replace.replace({
    None: "Missing",
    np.nan: 0
})
print(df_replace)

print("\nFill different columns with different values:")
df_multi = df.copy()
df_multi = df_multi.fillna({
    "name": "Unknown Name",
    "department": "Unknown Department",
    "marks": df_multi["marks"].mean(),
    "city": "Unknown City"
})
print(df_multi)

print("\nInterpolate missing numeric values:")
df_interpolate = df.copy()
df_interpolate["marks"] = df_interpolate["marks"].interpolate()
print(df_interpolate)

print("\nFinal cleaned DataFrame:")
final_df = df.copy()
final_df["name"] = final_df["name"].fillna("Unknown")
final_df["department"] = final_df["department"].fillna(final_df["department"].mode()[0])
final_df["marks"] = final_df["marks"].fillna(final_df["marks"].mean())
final_df["city"] = final_df["city"].fillna("Not Mentioned")
print(final_df)