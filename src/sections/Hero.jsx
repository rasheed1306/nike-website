const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start"></div>

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>
          <span> Our Summer Collection</span>
        </p>
        <h1>
          The New Arrival
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylist Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button></Button>
      </div>
    </section>
  );
};

export default Hero;
