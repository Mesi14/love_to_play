import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import Gamecard from './Gamecard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
  const {data, error, isLoading} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 5}} padding={10} spacing={10}>
      {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton key={skeleton} /></GameCardContainer>)}
      {data.map(game => (
       <GameCardContainer><Gamecard key={game.id} game={game} /></GameCardContainer>))}
    </SimpleGrid>
  )
}

export default GameGrid;
