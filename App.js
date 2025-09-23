import React, { lazy ,Suspense, useEffect} from "react";
const Header=lazy(()=> import('./components/Header'))
const Footer=lazy(()=> import('./components/Footer'))
const ProductList=lazy(()=> import('./components/ProductList'))
import './app.css'
export default function App(props){
    const [isLoading,setLoading]=React.useState(true)
    const [products,setProducts]=React.useState([])
    const NavList=[{key: 'Home',value:'home'},
        {key: 'About',value:'about'},
        {key: 'SignIn',value:'signIn'},
        {key: 'Register',value:'register'}
    ]
    const fetchData=async(offset=0,limit=40)=>{
        let data=await fetch(`${process.env.PRODUCTS_END_POINT}api/v1/products?offset=${offset}&limit=${limit}`)
        data=await data.json();
        data=data.slice(1,data.length-1)
        setProducts(data);
        setLoading(!isLoading)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div className="app_container">
            <Header navItems={NavList}>
                <div className="logo_container">
                    <img className="app_logo" src="https://i.imghippo.com/files/uXXy2708Yo.png" alt="user shopping cart image full of items"/>
            </div>
           </Header>
            {
                isLoading?<h1>Loading ....</h1>:(<ProductList products={products}/>)
            }
           {/* <Footer/>    */}
        </div>
    );

} 