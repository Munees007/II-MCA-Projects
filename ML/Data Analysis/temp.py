import pandas as pd 

data = pd.read_csv("zomato.csv")

data = data.head(2000)

data.to_csv("reduced_data.csv")