import { useState, useEffect, useCallback } from 'react';
import { Card } from '../card';
import { getPostsData } from '../getPostsData'
import './style.css';

export const CardList = () => {
    const [postsData, setPostsData] = useState([]);

    const postsDataApi = useCallback(async () => {
        const id = [12, 27, 42, 65, 66];

        const data = await Promise.all(id.map(num => getPostsData(num)));

        setPostsData (data as any);
    },  [setPostsData]) ;

    useEffect(() => {
        postsDataApi();
    }, [postsDataApi]);

    return (
        <div className="CardList">
            {postsData.map((item: PostData) => {
                return <Card postData = {item} key = {item.id}/>
            })}
        </div>
    );
}
