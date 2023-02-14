import { Flex, Text, Icon, Box, Tag, useBreakpointValue } from "@chakra-ui/react";
import { forwardRef } from "react";
import { Tooltip } from '@chakra-ui/react';
import { RiInformationLine } from "react-icons/ri"
interface CardContentBoxProps {
    title: string;
    subtitle: string;
    isButton?: boolean;
}
export function CardContentBox({ title, subtitle, isButton }: CardContentBoxProps) {
    const isWideVersion = useBreakpointValue({ base: false, sm: false, md: false, lg: true, xl: true });
    return (
        <Flex flexDir="column" textAlign="center">
            <Text
                fontSize={isWideVersion ? "48px" : "24px"}
                fontWeight="600"
                color="primary.100"
            >{title}
            </Text>
            {isButton
                ? <Text position="relative"
                    fontSize={isWideVersion ? "24px" : "16px"}
                    fontWeight={isWideVersion ? "600" : "400"}
                    color="primary.200"
                    mr={isWideVersion ? "0" : "20px"}
                >
                    {subtitle}
                    <Tooltip label="mais de 100 cidades">
                        <Text
                            display="flex"
                            position="absolute"
                            left={"105%"}
                            top={isWideVersion ? "2" : "1"}

                            w="17px"
                            h="17px"
                            as="span"
                            align="center"
                            justifyContent="center"
                            cursor="default"
                            borderRadius={"100%"}
                            border="2px solid rgba(153, 153, 153, 0.5)"
                            fontSize="10"
                            color="rgba(153, 153, 153, 0.5)"
                        >
                            i
                        </Text>
                    </Tooltip>
                </Text>
                : <Text
                    fontSize={isWideVersion ? "24px" : "16px"}
                    fontWeight={isWideVersion ? "600" : "400"}
                    color="primary.200"
                >
                    {subtitle}
                </Text>
            }
        </Flex>
    )
}
