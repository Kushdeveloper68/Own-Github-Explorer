import React , {useState , useEffect} from 'react'

function useGithubUser(username) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setUserData(data);
        };

        fetchData();
    }, [username]);

    return userData;
}

export default useGithubUser