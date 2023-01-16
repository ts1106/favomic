import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  HStack,
  Image as CImage,
  SimpleGrid,
  Spinner,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';
import useEpisodes from 'features/episodes/types/api/getEpisodes';

export default function Home() {
  const { episodesQuery, setToken } = useEpisodes(15);
  const now = new Date();

  return (
    <Box textAlign="center">
      {episodesQuery.isLoading ? (
        <Center h="80vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            textAlign="left"
          >
            {episodesQuery.data?.episodeList.map((episode) => (
              <Card
                shadow="md"
                key={new TextDecoder().decode(episode.id)}
                border="1px solid #d8d8d8"
              >
                <CImage src={episode.Thumbnail} alt="thumbnail" />
                <CardBody>
                  <Heading size="sm">{episode.title}</Heading>
                </CardBody>
                <CardFooter flexDirection="column" pt={0}>
                  <Text mb={2}>
                    {formatDistance(
                      episode.updatedAt?.toDate().getTime() as number,
                      now,
                      {
                        locale: ja,
                        addSuffix: true,
                      },
                    )}
                  </Text>
                  <HStack ml={-1}>
                    <Tag size="lg" colorScheme="red" variant="solid">
                      <TagLabel>少年ジャンプ＋</TagLabel>
                    </Tag>
                  </HStack>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          <Box>
            <Button
              onClick={() =>
                setToken(episodesQuery.data?.nextPageToken as string)
              }
              mt={10}
            >
              nextPage
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
