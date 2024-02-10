import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/users";
import UserCard from "../../components/UserCard/UserCard";
import { Spinner } from "@material-tailwind/react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllUsers = async () => {
        try {
            const res = await getAllUsers();
            setUsers(res?.users);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllUsers();
        setLoading(false);
    }, []);

    return (
        <>
            <>
                <section className="container mx-auto flex justify-between">
                    <aside className="w-1/4">form</aside>
                    {loading ? (
                      <LoadingSpinner/>
                    ) : (
                        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {users?.map((user) => (
                                <UserCard user={user} key={user?.id} />
                            ))}
                        </div>
                    )}
                </section>
            </>
        </>
    );
};

export default Home;
