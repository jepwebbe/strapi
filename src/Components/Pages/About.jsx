import React from 'react'
import { useState, useEffect } from 'react'

export const About = () => {
    const [data, setData] = useState([]);
    const baseurl = `http://localhost:1337`
    const endpoint = `/api/about`

    useEffect(() => {
        fetch(baseurl + endpoint)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data.data);
                // console.log(data)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }
            })
    }, [baseurl + endpoint])

    return (
        <>
            {console.log(data)}
            {data && Object.values(data).map(about => {
                return (
                    <>
                        <section><h3>About us</h3>{about.About}</section>
                    </>
                )
            })}
        </>
    )
}