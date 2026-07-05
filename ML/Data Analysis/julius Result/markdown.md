## Done — I cleaned the data and ran the analysis

I used the uploaded `reduced_data.csv`, cleaned the main columns, and then did the requested grouping analysis.

### What I cleaned first
I cleaned these parts of the dataset before analysis:
- removed the `Unnamed: 0` helper column
- converted `rate` from text like `4.1/5` into numeric values
- converted `votes` to numeric
- normalized text columns like `location`, `rest_type`, `name`, `online_order`, and `book_table`
- treated duplicate restaurant rows using `name + location` as the uniqueness key

### 1. Top 3 restaurants by rating in each location
I grouped by `location` and picked the top 3 restaurants by `rate` in each location.

A few examples from the result:
- **Banashankari** — `Taaza Thindi` at **4.7**, `Onesta` at **4.6**
- **Basavanagudi** — `Vidyarthi Bhavan` at **4.4**, `South Kitchen` at **4.3**
- **BTM** — `eat.fit` at **4.5**
- **Bannerghatta Road** — `Galito's` at **4.6**

If you want, I can also give you the full table location-wise in a clean format.

### 2. Total orders, online and offline counts
Using the dataset rows as orders:

- **Total orders**: `2000`
- **Online orders**: `1320`
- **Offline orders**: `680`

### 3. Total unique restaurants and count by `rest_type`
After removing duplicates by restaurant name and location:

- **Unique restaurants**: `1545`

Most common restaurant types:
- **Quick Bites** — `790`
- **Casual Dining** — `377`
- **Cafe** — `146`
- **Dessert Parlor** — `125`
- **Delivery** — `110`

### 4. Average rating by `rest_type` and top 10
I grouped by `rest_type` and calculated average rating, then kept the top 10.

Top few:
- **Microbrewery** — **4.40**
- **Casual Dining, Cafe** — **4.24**
- **Dessert Parlor, Beverage Shop** — **4.10**
- **Casual Dining, Pub** — **4.10**
- **Microbrewery, Casual Dining** — **4.10**

### Visuals
I also generated:
- a bar chart for the **top 10 rest types by count**
- a bar chart for the **top 10 rest types by average rating**

If you want, I can next give you:
- the **exact Python code**
- a **step-by-step explanation for MCA viva**
- or a **clean report format** you can paste into your assignment.{image_urls_dict['c3f4f423']}
{image_urls_dict['8307bf27']}