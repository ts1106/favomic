import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import useSearch from 'hooks/useSearch';
import React from 'react';

type Props = {
  button: JSX.Element;
};

export default function Search({ button }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    changeKeyword,
    tags,
    allTag,
    isSelectedTag,
    addTag,
    deleteTag,
    resetTags,
  } = useSearch();
  const newButton = React.cloneElement(button, { onClick: onOpen });

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
                  placeholder="作品名"
                />
              </FormControl>
            </Flex>
            <Box mt={4}>
              <Flex justify="space-between" align="center">
                <Text fontWeight={600} ml={2}>
                  タグ
                </Text>
                <Button
                  size="sm"
                  variant="unstyled"
                  onClick={resetTags}
                  isDisabled={!tags.length}
                  mr={2}
                >
                  選択解除
                </Button>
              </Flex>
              <Divider borderColor="gray.400" mt={1} />
              <Wrap direction="row" spacing={2} mt={2}>
                {allTag.map((tag) => (
                  <WrapItem>
                    {isSelectedTag(tag) ? (
                      <Tag
                        as="button"
                        size="md"
                        key={tag.id}
                        onClick={() => deleteTag(tag.id)}
                        colorScheme="blue"
                      >
                        <TagLabel>{tag.name}</TagLabel>
                      </Tag>
                    ) : (
                      <Tag
                        as="button"
                        size="md"
                        key={tag.id}
                        onClick={() => addTag(tag)}
                        variant="outline"
                        colorScheme="blue"
                      >
                        <TagLabel>{tag.name}</TagLabel>
                      </Tag>
                    )}
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
