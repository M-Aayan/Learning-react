import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="p-5 justify-between flex text-black items-center">
            <img src={logo} alt="Infinity Events Logo" height={50} width={150} className=""/>     
                <ul className="flex gap-5 font-medium">
                    <li><a href="#" className="hover:border-b-2 border-Blue-Shade">Home</a></li>
                    <li><a href="#" className="hover:border-b-2 border-Blue-Shade">Events</a></li>
                    <li><a href="#" className="hover:border-b-2 border-Blue-Shade">Dashboard</a></li>
                    <li><a href="#" className="hover:border-b-2 border-Blue-Shade">About Us</a></li>
                    <li><a href="#" className="hover:border-b-2 border-Blue-Shade">Contact</a></li>
                </ul>
            <div className="flex gap-4 items-center">
                <i className="ri-notification-line"></i>
                <p className="h-8 w-8 bg-Blue-Shade text-white rounded-[50%] text-xl text-center cursor-pointer">A</p>
                <p>Aayan</p>
                <i class="ri-arrow-down-s-line"></i>
            </div>
        </div>
    )
}

export default Navbar