import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slices';


const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((store)=>store.userSlice.user);


const handleLogout = ()=>{
signOut(auth).then(() => {
dispatch(removeUser())
  navigate('/');
}).catch((error) => {
  alert(error.message)
});
}



useEffect(()=>{

 
 const unsub = onAuthStateChanged(auth, (user) => {
   if (user) {
     const {uid, displayName, email} = user;
 
     dispatch(addUser({uid: uid, displayName: displayName, email: email}));

 
   } else {
     dispatch(removeUser());
     navigate('/');
   }
 });

 return unsub;
},[])

  return (
   

<>

<div className="z-60 absolute bg-gradient-to-b flex p-10! items-center justify-between from-black h-15 w-full top-0 left-0">
<img src="/images/logo.png" alt="logo" className='w-60 '/>

{user&&<ul className='text-white flex gap-15 text-xl'>
  <Link to="/browse">  <li className='hover:text-[#707AFE] cursor-pointer'>Movies</li>
  </Link>

<Link to='/browse/shows'>

  <li className='hover:text-[#707AFE] cursor-pointer'>Series</li>
  </Link>
</ul>}

{user &&<div className='flex justify-between gap-5 items-center'> <span className=' text-[#dadfff]'>  <i className="ri-user-2-fill text-[#dadfff] text-3xl"></i> {user.displayName}</span>
 
    <button onClick={handleLogout} className='p-1! cursor-pointer hover:bg-blue-700 bg-blue-500 text-[#ffffff] border rounded'>Log Out</button>
</div>}
</div>


</>


  )
}

export default Header