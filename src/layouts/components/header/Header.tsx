import {
  Box,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Link,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import { LogoLIcon, LogoSIcon } from 'assets/Logo';
import Search from 'components/Search/Search';
import { Navigation, SideNavigation } from './Navigation';

export default function Header() {
  const LogoIcon = useBreakpointValue({
    base: <LogoSIcon boxSize="45px" />,
    md: <LogoLIcon w="120px" h="40px" />,
  });

  return (
    <Box as="header" mb={2}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="72px"
        maxH="72px"
        py={{ base: 2 }}
        px={{ base: 4, md: 8 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex flex={1} display={{ base: 'flex', md: 'none' }}>
          <SideNavigation />
        </Flex>

        <Flex
          flex="auto"
          justifyContent={{ base: 'center', md: 'start' }}
          align="center"
        >
          <Link as={ReactRouterLink} to="/" display="block">
            {LogoIcon}
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={20}>
            <Navigation />
          </Flex>
        </Flex>

        <Stack
          flex="1"
          display={{ base: 'none', md: 'flex' }}
          direction="row"
          spacing={6}
          justify="flex-end"
          w="100%"
          maxW="600px"
        >
          <Search
            button={
              <IconButton
                icon={<SearchIcon />}
                variant="ghost"
                aria-label="Search Button"
              />
            }
          />
          {/* Todo ユーザーログイン機能の追加 */}
          {/* <Button as="a" fontSize="sm" fontWeight={400} variant="link" href="#">
            Sign In
          </Button>
          <Button
            as="a"
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="pink.400"
            href="#"
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign Up
          </Button> */}
        </Stack>
        <Flex
          display={{ base: 'flex', md: 'none' }}
          flex={1}
          justify="flex-end"
        >
          <Search
            button={
              <IconButton
                icon={<SearchIcon />}
                variant="ghost"
                aria-label="Search Button"
              />
            }
          />
        </Flex>
      </Flex>
    </Box>
  );
}
