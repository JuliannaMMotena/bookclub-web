import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Políticas de Privacidade</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <Text>
            At (simplified business name), privacy and security are priorities
            and we are committed to transparency in the processing of personal
            data of our users/customers. Therefore, this Privacy Policy
            establishes how the collection, use and transfer of information from
            customers or other people who access or use our website is carried
            out. When using our services, you understand that we will collect
            and use your personal information in the ways described in this
            Policy, under the rules of the Federal Constitution of 1988 (art. 5,
            LXXIX; and art. 22, XXX – included by EC 115/2022) , Data Protection
            standards (LGPD, Federal Law 13,709/2018), consumerist provisions of
            Federal Law 8078/1990 and other applicable standards of the
            Brazilian legal system. Therefore, (business name), hereinafter
            referred to simply as “(simplified business name)”, registered with
            the CNPJ/MF under no. (CNPJ no.), in the role of Data Controller, is
            obliged to comply with the provisions of this Policy of Privacy.
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
