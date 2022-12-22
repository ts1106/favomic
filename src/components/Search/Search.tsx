import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  useBreakpointValue,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react';
import useSearch from 'hooks/useSearch';
import React from 'react';

type Props = {
  button: JSX.Element;
};

export default function Search({ button }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { changeKeyword, tags, addTag, deleteTag, resetTags } = useSearch();
  const newButton = React.cloneElement(button, { onClick: onOpen });
  const allTags = ['異世界', '転生', '恋愛'];

  return (
    <>
      {newButton}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent mx={10}>
          <ModalBody>
            <Flex align="center">
              <FormControl>
                <Input
                  onChange={(e) => changeKeyword(e.target.value)}
                  placeholder="Search"
                />
              </FormControl>
            </Flex>
            <Wrap direction="row" spacing={2} mt={2}>
              {tags.map((tag) => (
                <Tag size="md" key={tag}>
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => deleteTag(tag)} />
                </Tag>
              ))}
            </Wrap>
            <Divider borderColor="gray.400" mt={2} />
            <Wrap direction="row" spacing={2} mt={2}>
              {allTags.map((tag) => (
                <Tag
                  as="button"
                  size="md"
                  key={tag}
                  onClick={() => addTag(tag)}
                >
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </Wrap>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
