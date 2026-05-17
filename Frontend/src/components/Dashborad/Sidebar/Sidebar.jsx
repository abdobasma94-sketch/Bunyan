import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar(){
 const links = [
   {icon:"fa-chart-line", title:"status", path:"/"},
   {icon: "fa-users", title: "Users management", path: "/Users"},    
   {icon: "fa-building", title: "Projects management", path: "/Projects"},  
   {icon: "fa-user-gear", title: "Developers management", path: "/Developers"},          
   {icon: "fa-globe", title: "CMS", path: "/CMS"},       
   {icon: "fa-message", title: "Live Chat", path: "/Chat"},
 ];

 return(
 <aside className={`${styles.sidebar} min-vh-100 py-4`}>
   <div className="fw-semibold px-3 fs-4 mb-2">Dashbord</div>
   <nav>
     {links.map((item, index)=>(
       <NavLink 
         to={item.path} 
         className={`${styles.navItem} d-flex align-items-center gap-3`} 
         key={index}
       >
         <i className={`fa-solid ${item.icon} fs-5`}></i>
         <span className="fs-5">{item.title}</span>
       </NavLink>
     ))}
   </nav>
 </aside>
 );
}
export default Sidebar;