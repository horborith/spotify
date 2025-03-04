import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface IProps{
  title: string;
}
const Playlists = React.memo((props: IProps) => {
  const {title} = props;
  return (
    <Box
      sx={{
        display: "flex",
        flex: 2,
        flexDirection: "column",
      }}
    >
      <StyledImgWraper>
        <img
          src="https://image.kpopmap.com/2020/10/aespa-member-profile-1.jpg"
          alt="image"
        />
      </StyledImgWraper>
      <Typography variant="subtitle1">Title</Typography>
      <Typography variant="body2">subtitle</Typography>
    </Box>
  );
});
const StyledImgWraper = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export default Playlists;
