import TitleAbove from "../../assets/titleAbove";
import TitleLeft from "../../assets/titleLeft";
import TitleLeftWrap from "../../assets/titleLeftWrap";

import { RadioGroup, Radio, Box, Heading } from "@chakra-ui/react";

const FormattingSelector = ({selected, onSelect}) => {

  return (
    <Box>
      <Heading as={"h2"} size={"sm"}>
        Titles
      </Heading>
      <RadioGroup flexDir={'row'}>
        <TitleAbove />
        <TitleLeft />
        <TitleLeftWrap />
      </RadioGroup>
    </Box>
  )
};

export default FormattingSelector