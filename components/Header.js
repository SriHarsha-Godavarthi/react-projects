import React from "react";
import "./header.css"
export default function Header(props){
    const [active,setActive]=React.useState('')
    const [isMenuClicked,setMenuClicked]=React.useState(false)
    const {navItems}=props
    return(<>
        <div className="header_container">
           {props.children}
           <div className="nav_list_container">
              <ul className="nav_items">
                {navItems.map((navItem=><li className={`nav_item`+(active==navItem.value?' active':'')} onClick={()=>setActive(navItem.value)} key={navItem.key}>{navItem.key}</li>))}
              </ul>
              <button className="menu-btn"
                    aria-label="Open menu"
                    aria-controls="site-menu"
                    aria-expanded="false"
                    onClick={()=>setMenuClicked(!isMenuClicked)}
              >
              <span>{!isMenuClicked?'☰':'✕'}</span>
              </button>
           </div>
        </div>
        {isMenuClicked?(<div className="menu_popup">
            <ul className="nav_items">
                {navItems.map((navItem=><li className={`nav_item`+(active==navItem.value?' active':'')} onClick={()=>setActive(navItem.value)} key={navItem.key}>{navItem.key}</li>))}
            </ul>
        </div>):null}
        </>
    );

} 