import { Spinner } from "@material-tailwind/react";

const LoadingSpinner = () => {
    return (
        <div className="w-full flex justify-center">
            <Spinner className="h-16 w-16" />
        </div>
    );
};

export default LoadingSpinner;
