/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { label, person, overrides, ...rest } = props;
  return (
    <Flex
      gap="127px"
      direction="column"
      position="relative"
      padding="20px 40px 8px 40px"
      backgroundColor="rgba(23,130,85,1)"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(211,48,48,1)"
        lineHeight="56.25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="347px"
        height="40px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sample Application"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="This is a sample message"
        {...getOverrideProps(overrides, "This is a sample message")}
      ></Text>
    </Flex>
  );
}
