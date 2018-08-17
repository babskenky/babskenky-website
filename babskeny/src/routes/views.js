import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Blog from './blog/blog';
import Store from './store/store';



const Views = () => {
    return(
        <div>
            <Switch>
                <Route exact={true} path="/" render={(props)=><Home {...props}/>}/>
                {/*<IndexRoute component={Portfolio}/>*/}
                <Route exact path="/about-baba" component={About}/>
                <Route exact path="/contact-with-baba" component={Contact}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/products" component={Store}/>
            </Switch>
        </div>

    )

}

export default Views