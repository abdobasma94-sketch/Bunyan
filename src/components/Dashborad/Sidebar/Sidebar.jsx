import Styles from "./Sidebar.module.css";
function Sidebar() {

    const links = [
        {icon: "fa-chart-line", title: "status"},
        {icon: "fa-users", title: "users managment"},
        {icon: "fa-building", title: "Projects managment"},
        {icon: "fa-building", title: "Developers managment"},
        {icon: "fa-globe", title: "CMS"},
        {icon: "fa-message", title: "lIVE CHAT"},

    ];
  return (
    <aside className={`${Styles.sidebar} min-vh-100 py-4`}>
        <div>Dashboard</div>
        <nav>
            {links.map((item, index)=> (
           <div className="navitem" key={index}>
            <i className={`fa-solid ${item.icon}`}></i>
            <span className="title">{item.title}</span>
           </div>
            ))}
            
        </nav>
    </aside>
  );
   
}
export default Sidebar