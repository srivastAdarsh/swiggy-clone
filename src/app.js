import React, { lazy, Suspense, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import ResContainer from './components/ResContainer';
import Login from './components/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import RestaurantDetails from './components/ResDetails';
import useOnlineStatus from './utils/hooks/useOnlineStatus';
import User from './context/User';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

// Main app
const App = () => {
    const onlineStatus = useOnlineStatus();
    const user = useContext(User);
    const [userName, setUserName] = useState(user.userName);
    return (
        <Provider store={appStore}>
            <User.Provider value={{ userName: userName, setUserName }}>
                <main className="container mx-auto">
                    <User.Provider value={{ userName: userName, setUserName }}>
                        <Header onlineStatus={onlineStatus} />
                    </User.Provider>
                    {!onlineStatus ?
                        <h1>
                            No internet conection!
                        </h1> :
                        <>
                            <Outlet />
                            <Footer />
                        </>
                    }
                </main>
            </User.Provider>
        </Provider>
    )
}

//Lazy loading About and Instamart components
const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <ResContainer />
            },
            {
                path: '/about',
                element:
                    <Suspense fallback={<h1>Loading about.....</h1>}>
                        <About />
                    </Suspense>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantDetails />
            },
            {
                path: '/instamart',
                element:
                    <Suspense fallback={<h1>Loading instamart.....</h1>}>
                        <Instamart />
                    </Suspense>
            },
            {
                path : '/cart',
                element : <Cart/>
            }
        ]
    }
])

root.render(<RouterProvider router={routes} />);
