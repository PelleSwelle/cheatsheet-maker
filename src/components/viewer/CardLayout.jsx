import {
  Box,
  HStack,
  VStack,
  Card,
  CardHeader,
  Heading,
  Text,
  CardBody,
  Wrap,
} from "@chakra-ui/react";

export default function CardLayout({
  content,

  groupingHeadingFontSize,
  groupingDescriptionFontSize,
  itemHeadingFontSize,
  itemDescriptionFontSize,

  groupingDescriptionIsVisible,
  itemDescriptionIsVisible,
}) {
  const sheetContent = content.children.map((group) => (
    <HStack>
      <Heading as={"h2"} size={groupingHeadingFontSize}>
        {group.name}
      </Heading>
      {groupingDescriptionIsVisible ? (
        <Text size={groupingDescriptionFontSize}>{group.description}</Text>
      ) : null}

      <Wrap>
        {group.children.map((child) => (
          <Card key={Math.random()}>
            <CardHeader>
              <Heading as={"h3"} size={itemHeadingFontSize}>
                {child.name}
              </Heading>
            </CardHeader>{" "}
            {itemDescriptionIsVisible ? (
              <CardBody>
                <Text size={itemDescriptionFontSize}>{child.description}</Text>
              </CardBody>
            ) : null}
          </Card>
        ))}
      </Wrap>
    </HStack>
  ));

  return <VStack>{sheetContent}</VStack>;
}
