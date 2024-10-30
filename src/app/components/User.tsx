type Props = {
  user: any;
};

const User = (props: Props) => {
  console.log("faart", props.user);
  return (
    <div>
      <p>User ID: {props.user?.id}</p>
      <p>User Name: {props.user?.first_name}</p>
      <img className="max-w-96" src={props.user?.profile_url} alt="avatar" />
    </div>
  );
};

export default User;
