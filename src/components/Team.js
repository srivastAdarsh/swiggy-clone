import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Team = (props) => {
    const { position, email } = props;
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const userData = await fetch("https://api.github.com/users/srivastAdarsh");
            const json = await userData.json();

            setUser(json);
            await getUserRepos(json.repos_url);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    const getUserRepos = async (url) => {
        try {
            const data = await fetch(url);
            const json = await data.json();
            setRepos(json);
        } catch (error) {
            console.error('Error fetching user repositories:', error);
        }
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!user) {
        return (<h1>No user data available</h1>);
    }

    const { name, avatar_url, location } = user;

    return (
        <div>
            <img src={avatar_url} alt="avatar" />
            <h1>{name}</h1>
            <p>{location}</p>
            <p>{position}</p>
            <p>{email}</p>
            {repos ? (
                <div>
                    <h2>Repositories</h2>
                    <ul>
                        {repos.map((repo) => (
                            <li key={repo.id}>
                                <Link to={repo.html_url}>{repo.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading repositories...</p>
            )}
        </div>
    );
};

export default Team;


// Expected log sequence
//     - Rendering component - user: null , repos : null
//     - useFetch Called
//     - user data fetched : {...}
//     - repos fetched : {...}
//     - rendering component - user : {...}, repos : null
//     - rendering component - user - {...}, repos : {...}
// 
// Real log sequence
//     - Rendering component - user: null, repos : null
//     - useFetch called
//     - userData fetched : {...}
//     - Rendering component - user: {...}, repos : null
//     - repos fetchd : {...}
//     - Rendering component - user : {...}, repos : {...}

// Explanation : 
// - Initial render
//     - Both repos and user is null
//     - After the component is rendered (i.e. Loading... is returned), useEffect is called
//     - useEffect will call getUserData() and fetches the data from the api
//     - When the data is fetched, setUser() will update the user state variable. 
//         - This will schedule a re-rendering of the component as the state variable is updated
//         - But re-rendering will not happen immediately.
//         - Instead, getUserRepos() will be called as the getUserData function is still in the call stack.
//             - Since, getUserRepos() is an asynchronous function, this will be executed parallely (event loop comes into the picture). 
//             - But, getUserRepos() is awaited i.e.browser should wait for the completion of this function, isn't it ? 
//               Yes, but this will not stop the execution of other lines of JS operations (console.log, stateUpdate etc).
//             - The event loop in JavaScript manages the execution of asynchronous tasks.Even though await suspends execution 
//               until the getUserRepos promise settles, it doesn't block the entire execution context. Other synchronous operations,
//               including logging and potential state updates (setRepos), can still occur before the awaited operation completes.
//             - React prioritizes re-rendering of the component before the processing result of await.
// - Hence, rendering component is logged (first re-render).
//     - In this first re-render, the user state has been updated but the repos state has not been updated. 
//       Even though the getUserRepos was awaited in the intial render, the repos state has not been updated in the first re-render.
//     - repos fetched will be printed now.
//     - getUserRepos also updates the repos state variable which again schedules a re-render. 
//  -  In the second re-render, we'll see rendering component user : {...} , repos : {...} on the console.
