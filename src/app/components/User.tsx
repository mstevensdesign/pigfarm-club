type Props = {
  user: any;
};

const User = (props: Props) => {
  console.log("faart", props.user);
  return (
    <div>
      <p>User ID: {props.user[0]?.id}</p>
      <p>User Name: {props.user[0]?.first_name}</p>
    </div>
  );
};

export default User;
