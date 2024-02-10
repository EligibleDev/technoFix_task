import { useParams } from "react-router-dom";
import { getUserDetails } from "../../api/users";
import { useEffect, useState } from "react";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchUserDetails = async () => {
        try {
            const res = await getUserDetails(id);
            console.log(res);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchUserDetails();
        setLoading(false);
    }, []);

    return <div>{id}</div>;
};

export default UserDetails;
