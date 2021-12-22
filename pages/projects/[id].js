import { useRouter } from 'next/router'
import React from 'react'


function myBalance(x){
    return 100*x;
}

function projectId() {

    const name = "Zakie"

    const router = useRouter()
    console.log(router)
    // const projectId = router.query.id
    const mypathname = router.pathname
    const queryid = router.query.id
    const intid = parseInt(queryid)
    const balance = myBalance(intid)
    return (
        <div>
            <h1>My query: {queryid}</h1>
            <h1>My pathname: {mypathname}</h1>
            <h1>My Name: {typeof(name)}</h1>
            <h1>My Balance: {balance}</h1>

        </div>
    )
}

export default projectId


