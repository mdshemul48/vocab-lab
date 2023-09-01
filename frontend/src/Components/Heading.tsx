function Heading() {
  return (
    <div className="font-poppins text-slate-700 relative">
      <div className="-z-[900] w-[25rem] h-[30rem] bg-purple-500 absolute rounded-full opacity-10 blur-3xl" />
      <div className="-z-[900] w-[30rem] h-[25rem] bg-red-500 absolute rounded-full opacity-10 blur-3xl right-[0rem] sm:right-[15rem]" />
      <p className="text-lg mb-2 font-normal italic opacity-70">LexiVerse: Your Ultimate Word Resource</p>
      <h1 className="text-4xl font-extrabold">Explore, Learn, and Expand Your Vocabulary</h1>
    </div>
  );
}

export default Heading;
