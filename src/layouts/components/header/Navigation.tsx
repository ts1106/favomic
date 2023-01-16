import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Stack,
  Link,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  StackItem,
  StackDivider,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

type NavItem = {
  label: string;
  path: string;
};

const NAV_ITEMS: NavItem[] = [
  // {
  //   label: 'ホーム',
  //   path: '/',
  // },
  // {
  //   label: 'ランキング',
  //   path: '/ranking',
  // },
];

function Navigation() {
  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            as={ReactRouterLink}
            p={2}
            to={navItem.path ?? '#'}
            fontSize="sm"
            fontWeight={500}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
}

function SideNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant="ghost"
        aria-label="Toggle Navigation"
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody px={4}>
            <Stack
              direction="column"
              divider={<StackDivider />}
              bg={useColorModeValue('white', 'gray.800')}
            >
              {NAV_ITEMS.map((navItem) => (
                <StackItem>
                  <Link
                    as={ReactRouterLink}
                    p={2}
                    to={navItem.path ?? '#'}
                    fontSize="sm"
                    fontWeight={500}
                    onClick={onClose}
                  >
                    {navItem.label}
                  </Link>
                </StackItem>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { Navigation, SideNavigation };
