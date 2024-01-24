import { SiKasasmart } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="container-fluid border-top py-3">
            <div className='container d-flex align-items-center justify-content-between'>
                <div>
                    <Link to={"/"} className="logo">
                        <SiKasasmart size={30} className="me-2" />
                        <span className="fs-4">Shopping Mall</span>
                    </Link>
                    <p>Shopping Mall {(new Date).getFullYear()}</p>
                    <p>All Right Reserved &copy;</p>
                </div>
                <div>
                    <p>Privacy & Policy</p>
                    <p>Term & Condition</p>
                </div>
            </div>
        </footer>
    )
}