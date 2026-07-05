import pandas as pd

data = pd.read_csv("DataSet.csv")
print(data)
print(data.head())
print(data.tail())
print(data.shape)
print(data.columns)
print(data.dtypes)
print(data.info())
print(data.isnull().sum())
data = data.fillna("")
print(data.describe())