# Swiggy Clone
This project is a clone of the popular food delivery app Swiggy, built using React.js. The goal of this project is to simulate the core functionalities of Swiggy ensuring a smooth user experience. 

## Features:
   - **Browse Restaurants** : View a list of restaurants with basic information. **The data is fetched from Swiggy API only**.
   - **Restaurant Details** : View detailed information about a selected restaurant, including its menu. **The data too is fetched from Swiggy API**.
   - **Add to Cart** : Add items to the cart from the restaurant menu.
   - **Dynamic loading** : Separate bundles are lazily loaded to increase faster initial load time.
   - **Infinite Scroll** : Scroll to the bottom of the page to load more restaurants.
   - **Live search** : Live search for restaurants for faster search.
   - **Filtering Option** : Filter restaurants based on rating.
   - **Toggle Accordian** : Accordian code from scratch for toggling view of restaurnat menus.
   - **Major Skills Used** : JavaScript, React, Redux Toolkit, React-Redux, Tailwind, JEST, Parcel 

## Installation:

1. Clone the repository using this command in your terminal:
   - ```git clone https://github.com/your-username/swiggy-clone.git```
2. Install dependencies:
   - ```npm install```
3. Start the development server: npm start
    - The app should now be running on http://localhost:3000.
    - **Please install the CORS extension**, before running the appplication on the browser, using the link :
      https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en


## Project Structure:
```
swiggy-clone/                                     Root folder
├── src/                                          Contains all soource code for the application
│   ├── components/                               Contains all the components
|   |   ├── About.jsx                             Displays my info and repos fetched from **github users api**
|   |   ├── Cart.jsx                              Displays the items in the cart
|   |   ├── Error.jsx                             Custom error page for unknown routes/errors
|   |   ├── Footer.jsx                            Contians links to differnt pages
|   |   ├── Header.jsx                            Contains the header of the application
|   |   ├── Instamart.jsx                         Lazily loaded component
|   |   ├── Login.jsx                             Sets the username entered in the input box
|   |   ├── ResCard.jsx                           Displays the restaurants in form of a card
|   |   ├── ResContainer.jsx                      Displays all restaurnats fetched from **Swiggy's live API**
|   |   ├── ResDetails.jsx                        Displays the details of slected restaurant
|   |   ├── ResMenu.jsx                           Displays the menu of the selected restaurant
|   |   ├── ResMenuCategory.jsx                   Contains a list of menu tagged under the same category         
│   │   ├── ShimmerResCard.jsx                    Displays Shimmer effect for a res card
│   │   ├── ShimmerResContainer.jsx               Displays Shimmer effect for the whole container 
│   │   ├── ShimmerResDetails.jsx                 Displays Shimmer effect for restaurant details page
│   │   ├── Team.jsx                              Displays information about tems member by fetching data from ## github user api
│   │   └── TeamClass.jsx                         Class based component
│   ├── context/
│   │   └── User.jsx                              Uses **useContext** for state management
|   ├── hoc/
│   │   └── ResCard.jsx                           Higher order component for top-rated restaurants
|   ├── store/
│   │   ├── Cart/
│   │   |    ├── CartSlice.jsx                    Slice for cart
│   │   └── appStore.jsx                          Store for the entire appplication
|   ├── utils/
│   │   ├── hooks/
│   │   |    ├── useOnlineStatus.jsx              Custom hook that keeps checking if internet is active or not
│   │   |    └── useRestaurantMenu.jsx            Custom hook to fetch data of a particular restaurant
│   |   └── constants.jsx                         Contains all the constants used throughout the application
│   |── app.js
│   |── index.css                                 Tailind configuration
│   |── index.html
│   └── style.css                                 Custom styles
├── package.json
└── README.md
```

## Snapshots: 
   ### **Homepage** ![image](https://github.com/user-attachments/assets/0262f744-70a7-4bca-bbd8-7657b5cf3e30)
   
   ### **Restaurant details page** : 
   **Closed acordian** ![image](https://github.com/user-attachments/assets/abe85ccc-106c-4a5d-bd74-a08695988731)
   **Opened accordian** ![image](https://github.com/user-attachments/assets/d21a8b99-a035-40ae-92cc-ee30ac81aac4)
    
   ### **Cart page** ![image](https://github.com/user-attachments/assets/98acf70c-3269-438c-a865-7aee959cf7ad)
       
   ### **Shimmer** : 
   **Homepage** ![image](https://github.com/user-attachments/assets/9ce61675-1829-4023-a476-157d1c383a3d)
   **Restaurant details page** ![image](https://github.com/user-attachments/assets/e67d594c-989c-4923-adb0-9293c6a72b22)

## Upcoming features : 
1. **Filtering options** : Multiple options to filter restaurants such as delivery time, price range, Veg/Non-veg etc.
2. **Cuisines based search** : Search restaurants using cuisines.
3. **Own backend server** : To get rid of the CORS issue, will incorporate own backend using ## Node & ## Express, which will send request to Swiggy's server and then the restaurants will be displayed.

## Contribution:
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License:
This project is licensed under the MIT License. See the LICENSE file for details.


