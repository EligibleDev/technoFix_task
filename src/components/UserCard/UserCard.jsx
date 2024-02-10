import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader floated={false} className="">
                <img src={user?.image} alt={`Avatar of ${user?.firstName}`} />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    <Link
                        className="hover:underline"
                        to={`/users/${user?.id}`}
                    >{`${user?.firstName} ${user?.lastName}`}</Link>
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {` ${user?.company?.title} / ${user?.company?.name}`}
                </Typography>
            </CardBody>
            <CardFooter className=" pt-2">
                <div className="flex items-center gap-7">
                    <FaEnvelope />
                    <p>{user?.email}</p>
                </div>

                <div className="flex items-center gap-7">
                    <FaLocationDot />
                    <p>{`${user?.address?.address}, ${user?.address?.city}`}</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default UserCard;
