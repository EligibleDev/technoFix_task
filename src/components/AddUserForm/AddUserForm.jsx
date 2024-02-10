import { Button, Input } from "@material-tailwind/react";

const AddUserForm = ({ handleAddUser }) => {
    return (
        <form
            className="flex flex-col justify-center gap-3 sticky top-4"
            onSubmit={handleAddUser}
        >
            <Input required type="text" name="firstName" label="First Name" />
            <Input required type="text" name="lastName" label="Last Name" />
            <Input required type="text" name="position" label="Job Position" />
            <Input required type="text" name="company" label="Company's Name" />
            <Input required type="text" name="email" label="Email Address" />
            <Input required type="text" name="address" label="Address" />
            <Input required type="text" name="city" label="City" />
            <input name="image" required type="file" />
            <Button type="submit">Add User</Button>
        </form>
    );
};

export default AddUserForm;
