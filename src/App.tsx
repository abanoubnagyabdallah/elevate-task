import { Grid, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "./interfaces/interface";
import ProductCard from "./components/ProductCard";

function App() {
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  };

  const { isLoading, data, error } = useQuery({queryKey:[`Products`], queryFn:fetchProducts});

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} margin={30}>
      {data.map((product:IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}

export default App;
