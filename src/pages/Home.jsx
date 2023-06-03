export const Home = () => {
  return (
    <>
      <h2>
        Welcome to home page
        {import.meta.env.VITE_SOME_KEY}
      </h2>
    </>
  );
};
