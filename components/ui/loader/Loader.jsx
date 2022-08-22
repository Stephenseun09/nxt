import { Box, Center } from "@chakra-ui/react";
import Colors from "../../../utils/Colors";
import classes from "./loader.module.css";
const Loader = () => {
  const { textColor } = Colors();
  return (
    <Center w="100%" h="60vh">
      <Box className={classes["lds-spinner"]}>
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
        <Box _after={{ bg: textColor }} />
      </Box>
    </Center>
  );
};

export default Loader;
