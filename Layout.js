import { Outlet, Link } from "react-router-dom";



function Layout() {
    return (
        <>
     
                    <div className = "NavigationBar">
                        
                            <Link to="/">History  </Link>
                        
                            <Link to="/blogs">Intesting Facts  </Link>
                        
                            <Link to="/contact">Photos</Link>
                    
                        </div>
                    
               

                <Outlet />



        </>
    );
}

export default Layout;