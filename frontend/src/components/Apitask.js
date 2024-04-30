import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Apitask = () => {
    const baseUrl = 'https://swapi.dev/api/films';
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <div>
            {data && data.results ? (
                data.results.map((item) => (
                    <ul key={item.episode_id}>
                        <li>Title: {item.title}</li>
                        <li>Episode ID: {item.episode_id}</li>
                        <li>Opening Crawl: {item.opening_crawl}</li>
                        <li>Director: {item.director}</li>
                        <li>Producer: {item.producer}</li>
                        <li>Release Date: {item.release_date}</li>
                    </ul>
                ))
            ) : (
                <div>
                    <p>No data found</p>
                </div>
            )}
        </div>
    );
};

export default Apitask;
