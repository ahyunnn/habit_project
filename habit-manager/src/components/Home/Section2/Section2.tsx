import FadeInWhenvisible from "../FadeInVisible";

const Section2 = () => {
  return (
    <section style={{ height: "100vh", backgroundColor: "#dff" }}>
      <FadeInWhenvisible>
        <h1>Section 2</h1>
      </FadeInWhenvisible>
    </section>
  );
};

export default Section2;
