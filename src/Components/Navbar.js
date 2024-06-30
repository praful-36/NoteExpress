import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('Auth_Token');
    if (authToken) {
      getUserInfo();
    }
  }, [localStorage.getItem('Auth_Token')])

  const handleLogout = () => {
    localStorage.removeItem('Auth_Token');
    navigate('/login');
  };

  async function getUserInfo() {
    try {
      const response = await fetch('http://localhost:5000/api/auth/getuser', {
        method: 'POST',
        headers: {
          authtoken: localStorage.getItem('Auth_Token'),
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          setUserInfo(data);
          setLoading(false);
        } else {
          console.error('User information not found in the response:', data);
          setLoading(false);
        }
      } else if (response.status !== 401) {
        const errorData = await response.json();
        console.error('Error fetching user information:', errorData);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
      setLoading(false);
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  };

  return (
    <header className='sticky-top'>
      <div className="left navbar navbar-expand-lg text-light">
        <div className="logo">
          <span id="header-text">NoteExpress</span>
        </div>

        <ul className=" me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''} `} aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''} `} to="/About">
              About
            </Link>
          </li>

          <div className="right">
            {!localStorage.getItem('Auth_Token') ? (
              ""
            ) : (
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/Notes' ? 'active' : ''} `} to="/Notes" >
                  Notes
                </Link>
              </li>
            )}
          </div>


        </ul>
      </div>



      <div className="right">

        <div className="darkmode">
          <button onClick={toggleDarkMode} className='darkmode-btn'>
            {darkMode ? (
              <i className="fa-regular fa-moon"></i>
            ) : (
              <i className="fa-regular fa-sun"></i>
            )}
          </button>

        </div>

        {!localStorage.getItem('Auth_Token') ? (
          <form className="d-flex" role="search">
            <Link className="btn btn-light btn-p" to="/Signup" role="button">
              Sign-Up
            </Link>
            <Link className="btn btn-light btn-p" to="/Login" role="button">
              Login
            </Link>
          </form>
        ) : (
          <div className="login-info">



            {loading ? (
              <p>Loading user information...</p>
            ) : userInfo ? (
              <p>Welcome, {userInfo.name}</p>
            ) : (
              <p>Error fetching user information</p>
            )}
            <button onClick={handleLogout} className="btn btn-light">
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;