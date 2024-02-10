import { Link, useParams } from "react-router-dom";
import { getUserDetails } from "../../api/users";
import { useEffect, useState } from "react";
import "./user-details.css";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchUserDetails = async () => {
        try {
            const res = await getUserDetails(id);
            setUser(res);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchUserDetails();
        setLoading(false);
    }, []);

    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="card">
                <button className="mail">
                    <Link to={`mailto:${user?.email}`}>
                        <FaEnvelope className="text-xl text-[#263238]" />
                    </Link>
                </button>
                <div className="profile-pic">
                    <img src={user?.image} alt="" />
                </div>
                <div className="bottom">
                    <div className="content">
                        <span className="name">{`${user?.firstName} ${user?.lastName}`}</span>
                        <span className="about-me">
                            <span className="flex gap-3 items-center">
                                <MdBusinessCenter className="text-xl" />
                                {` ${user?.company?.title} / ${user?.company?.name}`}
                            </span>
                            <span className="flex gap-3 items-center">
                                <FaLocationDot />
                                {`${user?.address?.address}, ${user?.address?.city}`}
                            </span>
                        </span>
                    </div>
                    <div className="bottom-bottom">
                        <FaEnvelope className="text-white text-xl" />
                        <p className="text-white">{user?.email} </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDetails;
