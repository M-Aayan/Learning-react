import logo from "../../assets/logo.png"


const Footer = () => {
    return (
        <div>
            <div className="flex justify-around bg-white p-8">
                <div>
                    <img src={logo} alt="Infinity Events Logo" height={80} width={200} className="" />
                    <p className="text-Gray-Shade text-[16px]">Your all-in-one platform to manage,<br /> organize and grow your events <br /> with ease.</p>
                </div>
                {/* quick links  */}
                <div>
                    <h3 className="font-bold text-xl">Quick Links</h3>
                    <ul className="mt-3 text-Gray-Shade">
                        <li><a href="#" className="hover:text-Blue-Shade text-[17px]">Home</a></li>
                        <li><a href="#" className="hover:text-Blue-Shade text-[17px]">Events</a></li>
                        <li><a href="#" className="hover:text-Blue-Shade text-[17px]">Dashboard</a></li>
                        <li><a href="#" className="hover:text-Blue-Shade text-[17px]">About Us</a></li>
                        <li><a href="#" className="hover:text-Blue-Shade text-[17px]">Contact</a></li>
                    </ul>
                </div>
                {/* support  */}
                <div>
                    <h3 className="font-bold text-xl">Supports</h3>
                    <p className="mt-2 text-Gray-Shade">Help Center</p>
                    <p className="mt-2 text-Gray-Shade">Terms & Conditions</p>
                    <p className="mt-2 text-Gray-Shade">Privacy Policy</p>
                    <p className="mt-2 text-Gray-Shade">FAQ</p>
                </div>
                {/* social media  */}
                <div>
                    <h3 className="font-bold text-xl">Follow Us</h3>
                    <div className="mt-10">
                        <i className="ri-facebook-circle-fill text-2xl p-3 bg-blue-200 rounded-full hover:text-blue-600 mr-4 cursor-pointer"></i>
                        <i className="ri-twitter-fill text-2xl p-3 bg-blue-200 rounded-full hover:text-blue-400 mr-4 cursor-pointer"></i>
                        <i className="ri-instagram-line text-2xl p-3 bg-blue-200 rounded-full hover:text-pink-600 mr-4 cursor-pointer"></i>
                        <i className="ri-linkedin-fill text-2xl p-3 bg-blue-200 rounded-full hover:text-blue-800 cursor-pointer"></i>
                    </div>
                </div>
            </div>
            {/* copyright  */}
            <div className="text-center pt-2 text-Gray-Shade bg-white">
                <p>© 2026 Infinity Events. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer