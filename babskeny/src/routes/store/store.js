import React,{Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import {bindActionCreators} from 'redux';
import './store.css';
import 'react-tabs/style/react-tabs.css';
import {connect} from 'react-redux';
// import {increment} from '../../store_reducer/action'
const mapStateToProps = (state) => ({products:state.products})
const Content = ({products}) =>(
    <Fragment>
    {
        products.map((item,i)=> {
            console.log(item.ImageLink)
            return (

                <div key ={i} className=" col-lg-4 col-md-5 col-sm-12">
                    <div className='card'>
                        <div className="card-img-top" style={{background:'rgba(209, 172, 101, 0.28)'}}><iframe style={{width:'55%',display:'block',margin:'auto'}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0"  src={item.ImageLink}></iframe></div>
                    <div className="card-body">
                        <h5 className="card-title">{item.ProductName}</h5>
                        <p className="card-text">{item.BriefContent}</p>
                        <a href={item.FileLink} className="btn btn-primary absolute" target='_blank'>BUY NOW</a>
                    </div>
                </div>
                </div>



            )

        }
    )
}
    </Fragment>
)

class Store extends React.Component{
    render(){
        const {products} =  this.props
        console.log(this.props)
        return (

            <div>
                <header id="home" className="home">
                    <div className="st-overlay-img">
                        <div className="container-fluid no-pd">

                            <div className="row">
                                <div className="col-md-12">
                                    <a href="https://easy1up.com/?id=babskenky"><img src="https://easy1up.com/images/banners/468by60.png" /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                <section>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-12 spc'}>
                                <Tabs>
                                    <TabList className={'spc'}>
                                        <Tab>My Products</Tab>
                                        <Tab disabled>Recommended Books</Tab>
                                    </TabList>
                                    <p className={'plr-20'}>If you need assistance, please click here to send us an email.</p>
                                    <TabPanel className={'spc'} style={{margin:0}}>
                                        <div className="container">
                                            <div className='row'>
                                       <Content products={products}/>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className={'spc'}>
                                        <div className="container">
                                            <div className='row'>
                                                <div className=" col-md-4 col-sm-12">
                                                    <div className='card'>
                                                        <div className="card-img-top"></div>
                                                        <div className="card-body">
                                                            <h5 className="card-title">New</h5>
                                                            <p className="card-text">
                                                                Military hero, teaches us a simple lesson on doing the simple things well before undertaking big one. If you are

                                                                BNY Holdings Incorporated
                                                                13801 Napoli Drive
                                                                Houston TX 77070
                                                                QUICK LINKS
                                                                Home
                                                                About Baba
                                                                FAQ
                                                                Get Started
                                                                Videos
                                                                PRODUCTS
                                                                Home
                                                                About
                                                                FAQ
                                                                Get Started
                                                                CONNECT WITH BABA
                                                                PrivacyIncome DisclosureTerms & Conditions
                                                                Copyright bnyholdings 2018. All rights reserved

                                                                Built with ReactJs by @michaelcityboy

                                                            </p>
                                                            <a href="#" className="btn btn-primary absolute">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                </section>


            </div>

        )
    }

    }


export default connect(mapStateToProps)(Store)