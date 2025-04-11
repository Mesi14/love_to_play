import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import Gamecard from './Gamecard';


const GameGrid = () => {
  const {games, error} = useGames();
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 5}} padding={10} spacing={10}>
      {games.map(game => (
        <Gamecard key={game.id} game={game} />))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid;
