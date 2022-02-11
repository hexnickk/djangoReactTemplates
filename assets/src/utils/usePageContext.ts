import {useEffect, useState} from "react";

export let usePageContext = <T = any>() => {
    let [pageContext, setPageContext] = useState<T | undefined>(undefined)
    useEffect(() => {
        let pageContext = document.getElementById('page-context').textContent
        setPageContext(JSON.parse(pageContext))
    }, [])
    return pageContext as T
}