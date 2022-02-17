import React from "react";
import { Artists } from "components/Items";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";
import Avatar from '@mui/material/Avatar';
interface IProps{ 
  title: string;
  subtitle: string;
}

const Recommendation = React.memo((props: IProps) => {
  const {title,subtitle} = props;
  return (
    <StyledWrapper>
      <Typography variant="h6">{subtitle}</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h4">{title}</Typography>
        <Button endIcon={<ArrowForwardIcon />}>see all</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        {range(0, 6).map((item, i) => (
          <Artists key={i} />
        ))}
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Recommendation;
