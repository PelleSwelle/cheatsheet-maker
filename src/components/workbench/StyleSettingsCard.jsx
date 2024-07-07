// import OrientationSwitcher from "./OrientationSwitcher";
// import StyleSwitcher from "./StyleSwitcher";
import {
  Box,
  Heading,
  StylesProvider,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

export default function StyleSettingsCard({
  styleSelected,
  onStyleChange,

  orientationSelected,
  onOrientationChange,
}) {
  return (
    <Box>
      <Heading as={"h2"} size={"md"}>
        Style
      </Heading>

      <Box className="orientation-switcher">
        <Heading as={"h2"} size={"sm"}>
          Orientation
        </Heading>

        <RadioGroup onChange={onOrientationChange} value={orientationSelected}>
          <Stack>
            <Radio value={"vertical"}>Vertical</Radio>
            <Radio value={"horizontal"}>Horizontal</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box>
        <Heading as={"h2"} size={"sm"}>
          Display as...
        </Heading>

        <RadioGroup
          name="style-radio"
          onChange={onStyleChange}
          value={styleSelected}
        >
          <Stack direction={"column"}>
            <Radio value={"columns"}>Columns</Radio>
            <Radio value={"cards"}>Cards</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
}
