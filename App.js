import React, { lazy ,Suspense} from "react";
const Header=lazy(()=> import('./components/Header'))
const Footer=lazy(()=> import('./components/Footer'))
// import {Header,Footer} from './components/index'
import './app.css'
export default function App(props){
    const [isLoading,setLoading]=React.useState(true)
    const NavList=[{key: 'Home',value:'home'},
        {key: 'About',value:'about'},
        {key: 'SignIn',value:'signIn'},
        {key: 'Register',value:'register'}
    ]
    return(
        <div className="app_container">
            <Suspense fallback={<h1>Loading Header .....</h1>}>
            <Header navItems={NavList}>
                <div className="logo_container">
                    <img className="app_logo" src="https://i.imghippo.com/files/uXXy2708Yo.png" alt="user shopping cart image full of items"/>
            </div>
           </Header>
            </Suspense>
           <Suspense fallback={<h1>Loading Footer .....</h1>}>
           <Footer/>
            </Suspense>
   
        </div>
    );

} 