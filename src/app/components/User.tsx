type Props = {
  user: any;
};

const User = (props: Props) => {
  return (
    <div>
      <p>User ID: {props.user?.id}</p>
      <p>First Name: {props.user?.first_name}</p>
      <p>Last Name: {props.user?.last_name}</p>
      <p>Email: {props.user?.email}</p>
      <p>Display Name: {props.user?.display_name}</p>
      <img className="max-w-96" src={props.user?.profile_url} alt="avatar" />
      {/* <Description /> */}
    </div>
  );
};

type DescriptionProps = {};
const Description = (props: DescriptionProps) => {
  return <p>description</p>;
};

export default User;
