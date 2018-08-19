import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import logo from './logo.svg';
import './App.css';

import Nav from './nav/nav';
import Views from './routes/views';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <div>
              <Helmet>
                      <meta charSet="utf-8"/>
                          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                              <meta name="theme-color" content="#000000"/>
                                  <meta name="author" content="Michael Eze"/>
                                  <meta name="description" content="Baba Nureni-Yusuf - Author |Co-Founder |Internet Entrepreneur |Product Strategy Expert | Global Trainer | Public Speaker | Internet Marketer | Coach | Digital Economy Evangelist
"/>
                                  <link rel="canonical" href="http://babskenky.com"/>
                                  <link rel="publisher" href="http://babskenky.com"/>
                                  <meta property="og:locale" content="en_US"/>
                                  <meta property="og:title"
                                        content="Baba Nureni-Yusuf - Author |Co-Founder |Internet Entrepreneur |Product Strategy Expert | Global Trainer | Public Speaker | Internet Marketer | Coach | Digital Economy Evangelist"/>
                                  <meta property="og:url" content="http://babskenky.com"/>
                                  <meta property="og:type" content="website"/>
                                  <meta property="og:site_name" content="babskenky"/>
                                  <meta property="og:description"
                                        content="Baba Nureni-Yusuf - Author |Co-Founder |Internet Entrepreneur |Product Strategy Expert | Global Trainer | Public Speaker | Internet Marketer | Coach | Digital Economy Evangelist"/>
                                  <meta name="viewport"
                                        content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
                                                                              <title>Babskenky</title>
              </Helmet>
          <Nav/>
          <Views/>
          <Footer/>
      </div>
    );
  }
}

export default App;
