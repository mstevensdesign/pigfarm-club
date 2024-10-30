type Props = {
  user: any;
};

const User = (props: Props) => {
  console.log("faart", props.user);
  return (
    <div>
      <p>User ID: {props.user?.id}</p>
      <p>User Name: {props.user?.first_name}</p>
    </div>
  );
};

export default User;
