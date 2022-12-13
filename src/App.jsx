import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Github, Linkedin, Instagram } from "@chakra-icons/bootstrap";
import profilePicture from "./assets/profile.jpeg";
import "./App.css";

function TopComponent() {
  return (
    <>
      <Image
        src={profilePicture}
        alt="Profile"
        borderRadius="lg"
        height="200px"
        width="100%"
      />
      <Stack mt="2">
        <Center>
          <Heading as="h3" size="md">
            Robert Quartey
          </Heading>
        </Center>
        <Center>
          <Heading as="h5" size="sm">
            Full Stack developer
          </Heading>
        </Center>
        <Center>
          <Text size="md">
            <Link
              color="teal.500"
              href="http://robertquartey7.github.io/TKH_Portfolio/"
            >
              Portfolio site
            </Link>
          </Text>
        </Center>
      </Stack>

      <Stack direction="row" spacing={4} className="center">
        <Button leftIcon={<Github />} colorScheme="gray" variant="solid">
          GitHub
        </Button>
        <Button leftIcon={<Linkedin />} colorScheme="gray" variant="solid">
          LinkedIn
        </Button>
      </Stack>
    </>
  );
}
function AboutSection() {
  return (
    <>
      <Heading as="h6" size="sm">
        About
      </Heading>
      <Text>
        I'm a junior developer and also a senior at John Jay majoring in
        computer secience
      </Text>
    </>
  );
}
function InterestSection() {
  return (
    <>
      <Heading as="h6" size="sm">
        Interest
      </Heading>
      <Text>
        I love building web app, i have a lot of interest in solving problems
        and trying new technologies out.
      </Text>
    </>
  );
}
function FooterComponent() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Linkedin w={10} h={10} />
        <Instagram w={10} h={10} />
        <Github w={10} h={10} />
      </Stack>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Card maxW="sm">
        <CardBody>
          <TopComponent />
          <AboutSection mt={2} />
          <InterestSection mt={2} />
        </CardBody>
        <Divider />
        <CardFooter className="center">
          <FooterComponent />
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
