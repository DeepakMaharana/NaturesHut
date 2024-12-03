
import '../css/header.css';
import villaLogo from '../assets/villa-logo-half.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

export default function NavigationBar()
{
    const userData = useContext(UserContext);
    const cart = useSelector((store)=>store.cart.item);

    return <nav id="navigationBar" className='flex justify-center sm:justify-between'> 
        <div>
            <Link to={"/"}>
                <img src={villaLogo} alt="Logo" />
            </Link>
        </div>
        <h1 className='font-bold text-[#795436] text-3xl '><Link to={"/"}> <span className='text-green-600'>Natures</span>Nest</Link></h1>
    </nav>;
}
