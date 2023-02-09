import { Image } from "@chakra-ui/react";

export function Airplane() {
    return (
        <Image
            position="absolute"
            right={{ xl: "40", lg: "30", md: "2" }}
            top={79}
            src="./images/airplane.svg"
            alt="Imagem de um Avião"
        />

    )
}