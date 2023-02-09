import { Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useRouter as useNextRouter } from "next/router";
import { useEffect, useState } from "react";
import { RxCaretLeft } from 'react-icons/rx';

export function Header() {
    const { asPath } = useNextRouter();
    const router = useRouter();
    const [isShowButtonNavigate, setisShowButtonNavigate] = useState(false);

    useEffect(() => {
        if (asPath === "/") {
            setisShowButtonNavigate(false)
        } else {
            setisShowButtonNavigate(true)
        }
    }, [asPath]);
    return (
        <Flex as="header" w="100%" maxW={1400} m="0 auto" h="100" align="center" p={10} >
            {isShowButtonNavigate &&
                <IconButton
                    aria-label="Prev navigate"
                    icon={<Icon as={RxCaretLeft} />}
                    fontSize="30"
                    variant={"unstyled"}
                    onClick={() => router.push("/")} />}
            <Image
                src="./logo.svg"
                alt="Logo World Trip"
                m="0 auto"
                maxW={185}
                cursor="pointer"
                onClick={() => router.push("/home")}
            />
        </Flex>
    )
}