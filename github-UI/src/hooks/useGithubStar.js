import React , {useState , useEffect} from 'react'

function useGithubStar(username) {
    const [starData, setStarData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${username}/starred`);
            const data = await response.json();
            setStarData(data);
        };

        fetchData();
    }, [username]);

    return starData;
}

export default useGithubStar