import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const TermsModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Termos de Uso</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <Text>
            • All products and content on this platform are technical literature
            to support legal practice, INITIAL and basic MODELS that must be
            used BY A QUALIFIED PROFESSIONAL - LAWYER for their end client, and
            must be reviewed, adapted to the specific case in accordance with
            facts, evidence, local jurisprudence, updated and specific legal
            basis. UNDER NO CIRCUMSTANCES will consultancy or any legal service
            be provided. • When registering on the platform, you agree to
            provide your email address. Free registration is limited to one
            account per person/entity - no more than one registration per
            person/entity is permitted. • By registering, you authorize the
            COLLECTION OF DATA FROM YOUR RESEARCH and access to content, and
            authorize the sending of content to your email. • In the paid plan,
            you authorize CONSENTED AUTOMATIC RENEWAL: All plans paid by credit
            card constitute a subscription contract renewable monthly for an
            indefinite period, with MONTHLY CHARGES automatically made to the
            indicated credit card, until cancellation occurs by the user -
            situation in which all future charges will cease and the user will
            lose access to the platform and consequently the ability to download
            content. Paid registration (PRO) is limited to one account per
            person/entity - no more than one registration per person/entity is
            permitted. • You can CANCEL YOUR SUBSCRIPTION at any time, without
            any additional cost or loyalty. Cancellation must be done by the
            user through the "My Subscription" menu. • It is the user's
            responsibility to ensure the validity of the aforementioned laws and
            jurisprudence, as well as the suitability of the products and
            contents for the procedural phase and risks of unfoundedness. We do
            not offer a guarantee that the contents are up to date, adequate to
            current legislation or any responsibility for the failure to use the
            models for any reason, whether because they are inadequate, outdated
            or inappropriate for the specific case. • Before subscribing to this
            platform, check that all the products and content you are interested
            in are available in the search field. Possible suggestions for
            including new content in future editions of products and e-books
            will be analyzed, but without guarantee of acceptance or any
            commitment that will be made available. • You CAN use the products
            on this platform exclusively for immediate use in real and concrete
            cases of your end client, for professional purposes in the practice
            of Law in the administrative or judicial procedural sphere. • You
            CANNOT download, store, resell, disseminate, distribute or publish,
            even for free, the content of this platform for purposes not
            directly linked to a concrete and immediate case linked to your end
            client's process. It is not permitted to download or store products
            from the platform simply for future use, without the existence of a
            real and concrete case. • LGPD. We use cookies and other
            technologies to improve your user experience, and may capture, store
            and process your personal information. You have the right to access,
            request deletion or confirm that we process your personal data,
            except when legal or tax obligations prevent us from doing so. Your
            data is managed by Modelo Inicial, and you can contact the person
            responsible for your data via email: midia@modeloinicial.com.br. You
            also have the right to contact the Brazilian Data Protection
            Authority directly. SEE FULL CONSENT FORM BELOW. • Compulsory
            cancellation. We reserve the right to cancel or block immediately
            and without prior notice your account (or access linked directly or
            indirectly to you), whether paid or free, if you fail to comply with
            any of the clauses in these terms. We may block access and request
            additional information from users if we identify suspicious activity
            or usage patterns outside of what is intended for this tool. • Any
            difficulty, impediment, request, suggestion or complaint can be made
            via the platform's COMMUNICATION channel, by email
            midia@modeloinicial.com.br or by telephone (11) 4130.3734.• Ao
            prosseguir você concorda que ELEGE O FORO de Porto Alegre/RS para a
            solução de qualquer litígio decorrente desta relação. • Please also
            read our Privacy Policy and our complete Terms of Use to be aware of
            all details involving the use of the website and/or downloading
            content. If you do not agree or have questions about any of the
            items, please do not proceed and contact us for clarification.
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
