import { londrina, maven } from "../utils/fonts";
import { TUser } from "../utils/types";

type Props = {
  user: TUser;
};

const User = (props: Props) => {
  return (
    <>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-x-5 p-5 lg:flex-row">
        <Avatar user={props.user} />
        <div className="flex flex-col items-center justify-between lg:items-start">
          <DisplayName user={props.user} />
          <div className="flex flex-col items-center gap-1 lg:mb-5 lg:flex-row">
            <Pronouns user={props.user} />
            <Age user={props.user} />
          </div>
          <Description user={props.user} />
        </div>
      </div>
      <Tabs />
      <Divider />
    </>
  );
};

const Divider = () => {
  return (
    <div className="mx-auto px-5">
      <hr className="border-gray-500" />
    </div>
  );
};

const Tabs = () => {
  return (
    <div className="mb-2 flex justify-center gap-20 text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
    </div>
  );
};

const Avatar = (props: Props) => {
  return (
    <img
      className="w-40 rounded-md object-cover lg:w-36"
      src={props.user?.profile_url}
      alt="avatar"
    />
  );
};

const DisplayName = (props: Props) => {
  return (
    <div className={`${londrina.className} text-h6 text-green`}>
      {props.user?.display_name}
    </div>
  );
};

const Pronouns = (props: Props) => {
  return <div className="">{`${props.user?.pronouns}`}</div>;
};

const Age = (props: Props) => {
  return <div className="">{`${props.user?.dob}`}</div>;
};

const Description = (props: Props) => {
  return <div className={`${maven.className}`}>{props.user?.description}</div>;
};

export default User;
