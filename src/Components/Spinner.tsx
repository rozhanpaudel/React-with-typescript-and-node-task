import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading }): JSX.Element => {
  const logic = isLoading ? (
    <div>
      <CircularProgress />
    </div>
  ) : null;
  return <div>{logic}</div>;
};

export default Spinner;
