import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const title_style = {
  display: "flex",
  justifyContent: "space-between",
};

class TodoSkeleton extends Component {
  render() {
    return (
      <div>
        <Box
          sx={{
            height: "max-content",
            width: "100%",
          }}>
          <Skeleton
            animation='wave'
            height={100}
            width={600}
          />
          {[...Array(8)].map((_) => (
            <Box sx={{ display: "flex",  margin: 0 }}>
              <Skeleton variant='rectangular' sx={{ margin: 0.2 }} width={170} height={50} />
              <Skeleton variant='rectangular' sx={{ margin: 0.2 }} width={170} height={50} />
              <Skeleton variant='rectangular' sx={{ margin: 0.2 }} width={170} height={50} />
              <Skeleton variant='circular' sx={{ margin: 1 }} width={25} height={25} />
              <Skeleton variant='circular' sx={{ margin: 1 }} width={25} height={25} />
            </Box>
          ))}
        </Box>
      </div>
    );
  }
}

export default TodoSkeleton;
