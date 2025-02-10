import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type CircularProgressWithLabelProps = {
    value: number;
    size?: number;
};

function CircularProgressWithLabel({
    value,
    size = 30,
}: CircularProgressWithLabelProps) {
    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-flex",
                width: size,
                height: size,
            }}
        >
            <CircularProgress
                variant="determinate"
                value={value}
                size={size}
                thickness={5}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ fontSize: 10 }}
                >
                    {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState<number>(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10
            );
        }, 800);
        return () => clearInterval(timer);
    }, []);

    return <CircularProgressWithLabel value={progress} size={30} />;
}
