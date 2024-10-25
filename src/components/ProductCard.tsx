import { Button, Card, CardBody, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react";

export interface IProduct {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: { rate: number, count: number }
    title: string
}
interface IProps {
    product: IProduct
}
export default function ProductCard({ product }: IProps) {
    const { colorMode } = useColorMode()

    return (
        <Card bg={"none"} border={'1px solid #a8b5c8'}>
            <CardBody>
                <Image
                    src={product.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='50%'
                    width={200}
                    height={200}
                    mx={'auto'}
                    objectFit={'cover'}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color={"white"} textAlign={'center'} p={3} mb={2}>{product.title}</Heading>
                    <Text color={"white"} fontSize={'sm'} textAlign={'center'}> {product.description} </Text>
                    <Text color='purple.600' fontSize='3xl' textAlign={'center'}> ${product.price}</Text>
                    <Text color='purple.600' fontSize='3xl' textAlign={'center'}>Rate : {product.rating.rate}</Text>

                    <Button
                        bg={colorMode === "light" ? "#e6f3fd" : "#9f7aea"}
                        color={colorMode !== "light" ? "#e6f3fd" : "#9f7aea"}
                        size={'xl'}
                        variant={"outline"}
                        border={"none"}
                        py={5}
                        overflow={'hidden'}
                        width={'full'}
                        _hover={{
                            bg: colorMode !== "light" ? "#e6f3fd" : "#9f7aea",
                            color: colorMode === "light" ? 'white' : "#9f7aea",
                            border: "transparent"
                        }}>
                        View Details
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    )
}
