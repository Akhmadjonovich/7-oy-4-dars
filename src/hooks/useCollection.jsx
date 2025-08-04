import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebasa/config"

export let useCollection = (colName) => {
    let [data, setData] = useState(null)

    useEffect(() => {
        let unsubscribe = onSnapshot(collection(db, colName), (snapshot) => {
            let data = []
            snapshot.docs.forEach((user) => {
                data.push({id: user.id , ...user.data()})
            })
            setData(data)
        })
        return () => unsubscribe()
    }, [])
    return {data};
}