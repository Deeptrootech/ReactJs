import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

function DataFeching_UseState() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")
    const [postdata, setpostdata] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts /1")
            .then(response => {
                setloading(false)
                console.log(response.data);
                setpostdata(response.data)
                seterror("")
            })
            .catch(err => {
                setloading(false)
                setpostdata({})
                seterror("SomeThing Went Wrong")
            })
    }, [])
    return (
        <div>
            <h1>DataFeching_UseState:</h1>
            <p>{loading ? "Loading" : postdata.title}</p>
            <p>{error ? error : null}</p>
        </div>
    )
}

export default DataFeching_UseState