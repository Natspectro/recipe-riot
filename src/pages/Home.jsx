import { Card, Image, Text } from "@mantine/core";

const Home = () => {
  return (
    <div>
      <p>Text</p>
      <Card
        mx={"auto"}
        maw={400}
        miw={250}
        shadow={"sm"}
        p={"lg"}
        radius="md"
        withBorder
      >
        <Card.Section>
          <Image
            height={200}
            src="https://images.unsplash.com/photo-1675870793073-70306dbc541f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </Card.Section>

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eveniet
          quia distinctio vitae laborum obcaecati praesentium maxime ullam
          similique ipsam?
        </Text>
      </Card>
    </div>
  );
};

export default Home;
