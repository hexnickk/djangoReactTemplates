import React, {LazyExoticComponent, Suspense} from 'react';
import ReactDOM from "react-dom";

let App = React.lazy(() => import('./App'))
let TodosIndexPage = React.lazy(() => import('./todos/pages/index.page'))

let declarePage = (id: string, Content: LazyExoticComponent<any>) => {
    try {
        ReactDOM.render(<Suspense fallback={<></>}><Content/></Suspense>, document.getElementById(id));
    } catch (e) {
        // Do nothing
    }
}

declarePage('app', App)
declarePage('todos-index', TodosIndexPage)
