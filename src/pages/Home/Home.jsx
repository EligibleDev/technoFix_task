import React, { useEffect, useState } from "react";
import { addUser, getAllUsers, uploadImage } from "../../api/users";
import UserCard from "../../components/UserCard/UserCard";
import { Button, IconButton, Input } from "@material-tailwind/react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Filters from "../../components/Filters/Filters";
import toast from "react-hot-toast";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");
    const [activePage, setActivePage] = useState(1);
    const [skip, setSkip] = useState(0);

    const getItemProps = (index) => ({
        variant: activePage === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActivePage(index),
    });

    const next = () => {
        if (activePage === 12) return;

        setActivePage(activePage + 1);
    };

    const prev = () => {
        if (activePage === 1) return;

        setActivePage(activePage - 1);
    };

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const handleSort = async (e) => {
        const method = e.target.value;

        if (method === "name") {
            const sortedUsers = [...users].sort(function (a, b) {
                var nameA = a.firstName.trim().toUpperCase();
                var nameB = b.firstName.trim().toUpperCase();
                return nameA.localeCompare(nameB);
            });
            setUsers(sortedUsers);
        } else if (method === "email") {
            const sortedUsers = [...users].sort(function (a, b) {
                var emailA = a.email.trim().toUpperCase();
                var emailB = b.email.trim().toUpperCase();
                return emailA.localeCompare(emailB);
            });
            setUsers(sortedUsers);
        } else if (method === "company") {
            const sortedUsers = [...users].sort(function (a, b) {
                var companyA = a.company.name.trim().toUpperCase();
                var companyB = b.company.name.trim().toUpperCase();
                return companyA.localeCompare(companyB);
            });
            setUsers(sortedUsers);
        } else {
            setLoading(true);
            fetchAllUsers(query);
            setLoading(false);
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Adding User...");

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const position = e.target.position.value;
        const companyName = e.target.company.value;
        const email = e.target.email.value;
        const location = e.target.address.value;
        const city = e.target.city.value;
        const image = e.target.image.files[0];

        try {
            const imageData = await uploadImage(image);
            const newUser = {
                firstName,
                lastName,
                company: {
                    name: companyName,
                    title: position,
                },
                email,
                address: {
                    address: location,
                    city,
                },
                image: imageData?.data?.url,
            };

            const res = await addUser(newUser);
            toast.success("User Added", { id: toastId });
            e.target.reset();
        } catch (error) {
            console.error(error);
            toast.error(error.message, { id: toastId });
        }
    };

    const fetchAllUsers = async (query, skip) => {
        try {
            const res = await getAllUsers(query, skip);
            setUsers(res?.users);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchAllUsers(query, skip);
        setLoading(false);
        console.log();
    }, [query, skip]);

    return (
        <>
            <section className="container mx-auto flex justify-between gap-4">
                <aside className="w-1/4">
                    <form
                        className="flex flex-col justify-center gap-3 sticky top-4"
                        onSubmit={handleAddUser}
                    >
                        <Input required type="text" name="firstName" label="First Name" />
                        <Input required type="text" name="lastName" label="Last Name" />
                        <Input
                            required
                            type="text"
                            name="position"
                            label="Job Position"
                        />
                        <Input
                            required
                            type="text"
                            name="company"
                            label="Company's Name"
                        />
                        <Input required type="text" name="email" label="Email Address" />
                        <Input required type="text" name="address" label="Address" />
                        <Input required type="text" name="city" label="City" />
                        <input name="image" required type="file" />
                        <Button type="submit">Add User</Button>
                    </form>
                </aside>

                <div className="w-3/4 space-y-4">
                    <Filters handleSort={handleSort} handleSearch={handleSearch} />{" "}
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {users?.map((user) => (
                                <UserCard user={user} key={user?.id} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <div className="w-full flex items-center justify-center gap-4 my-10">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={activePage === 1}
                >
                    <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)}>1</IconButton>
                    <IconButton {...getItemProps(2)}>2</IconButton>
                    <IconButton {...getItemProps(3)}>3</IconButton>
                    <IconButton {...getItemProps(4)}>4</IconButton>
                    <IconButton {...getItemProps(5)}>5</IconButton>
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={activePage === 5}
                >
                    Next
                    <FaArrowRight strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </>
    );
};

export default Home;
