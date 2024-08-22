

const Navber = () => {
  const style = {
    '--clr': '#1e9bff',
    // '--clr': '#6eff3e',
  };
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="/">Home</a></li>
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="/#about">About</a></li>
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="/#skills">Skills</a></li>
         {/*   <li><a href="">Skills</a></li> */}
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="/#portfolio">Portfolio</a></li>
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff] "><a href="">Blogs</a></li>
      </ul>
    </div>
     <img className="w-14" src="/logofix.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="">Home</a></li>
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="/#about">About</a></li>
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="/#skills">Skills</a></li>
         {/*   <li><a href="">Skills</a></li> */}
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="/#portfolio">Portfolio</a></li>
         <li className="robo text-base font-meduim text-white hover:text-[#1e9bff] hover:bg-none hover:border-[#1e9bff]"><a href="">Blogs</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a style={style} className="contact_btn  " href="#contact"><span>contact</span><i></i></a>
  </div>
</div>

            </div>
        </div>
    );
};

export default Navber;