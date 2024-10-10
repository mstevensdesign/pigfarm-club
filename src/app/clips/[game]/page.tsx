type Props = {
  params: {
    game: string;
  };
};

const page = (props: Props) => {
  let game = "";
  if (props.params.game === "ow2") {
    game = "Overwatch 2";
  }
  return <div>{game}</div>;
};

export default page;
