import { Flex } from '@chakra-ui/react'
import { NavBar, BookList, CategoryList } from 'components'
import { useQuery } from 'react-query'
import { getHighLightedBooks } from 'services/api/requests'

export const HomeScreen = () => {
  const { data, isLoading } = useQuery('highlighted', getHighLightedBooks)
  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        mt={['24px', '48px']}
        w="100%"
        h={['72px', '200px']}
        paddingX={['24px', '48px', '80px', '40px']}
      >
        <Flex
          w="100%"
          h="100%"
          backgroundImage="url('/img/banner.svg')"
          backgroundSize="cover"
          backgroundPosition={['start', 'center']}
          backgroundRepeat="no-repeat"
          borderRadius={['8px', '24px']}
        />
      </Flex>
      <BookList title="Destaques" data={data?.data} isLoading={isLoading} />
      <CategoryList />
    </Flex>
  )
}
