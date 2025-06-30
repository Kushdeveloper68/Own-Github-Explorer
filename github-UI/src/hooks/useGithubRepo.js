import React , {useState , useEffect} from 'react'

function useGithubRepo(username) {
    const [repoData, setRepoData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();
            setRepoData(data);
        };
        fetchData();
    }, [username]);

    return repoData;
}

export default useGithubRepo