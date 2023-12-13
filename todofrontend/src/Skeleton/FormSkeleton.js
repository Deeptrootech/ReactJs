import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

class FormSkeleton extends Component {
  render() {
    return (
      <div>
        <Box
          sx={{
            height: "max-content",
            width: "100%",
          }}>
          <Skeleton animation='wave' height={80} width={350} />
          <Skeleton animation='wave' height={80} width={350} />
          <Box sx={{ display: "flex", margin: 0 }}>
            <Skeleton
              variant='rectangular'
              sx={{ margin: 2, marginX: 0 }}
              width={25}
              height={25}
            />
            <Skeleton
              variant='text'
              sx={{ margin: 1 }}
              width={100}
            />
            <Skeleton
              variant='rectangular'
              sx={{ margin: 1 }}
              width={100}
              height={40}
            />
          </Box>
        </Box>
      </div>
    );
  }
}

export default FormSkeleton;
