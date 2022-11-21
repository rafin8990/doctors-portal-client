import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Navbar from '../../Shered/Navbar/Navbar';

const DashBoardLayout = () => {
    const {user}=useContext(AuthContext)
    const [isAdmin]=useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        <li><Link to='/dashboard'>My appointments</Link></li>
                        <li>
                            {
                                isAdmin && <Link to='/dashboard/users'> All Users</Link>
                            }
                        </li>
                        <li>
                            {
                                isAdmin && <Link to='/dashboard/adddoctor'> Add a Doctor</Link>
                            }
                        </li>
                        <li>
                            {
                                isAdmin && <Link to='/dashboard/managedoctor'> Manage Doctors</Link>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;