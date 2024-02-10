import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/users";
import UserCard from "../../components/UserCard/UserCard";
import { Input, Spinner } from "@material-tailwind/react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const fetchAllUsers = async (query) => {
        try {
            const res = await getAllUsers(query);
            setUsers(res?.users);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchAllUsers(query);
        setLoading(false);
    }, [query]);

    return (
        <>
            <>
                <section className="container mx-auto flex justify-between">
                    <aside className="w-1/4">
                        <Input onChange={handleSearch} label="search..." />
                    </aside>
                    {loading ? (
                        <LoadingSpinner />
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
