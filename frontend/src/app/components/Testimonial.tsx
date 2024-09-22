const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      companyImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
      description:
        "Just amazed at the way they work with their magic in this sector. I'd love to partner up with them for future gigs.",
      personImage:
        "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg",
      personName: "Ram Sundar",
      personPosition: "UI Graphics Designer",
    },
    {
      id: 2,
      companyImage:
        "data:image/png;base64,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",
      description:
        "I really enjoyed working and collaborating with growMore. My business has doubled over a span of two weeks",
      personImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNbQHm5JxxqX9oy5KER7O8aSKzblZZ7aVfZT3jB7IqQ&s",
      personName: "Salomi Airy",
      personPosition: "Frontend Developer",
    },
    {
      id: 3,
      companyImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
      description:
        "Wow! They are the best in the business. I love the way they go about their job, sheer professionalism at its best!",
      personImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVFwiCwqjKjyL7tVfEMrswvIV_NgKDbRCdw&usqp=CAU",
      personName: "Susheel Thapa",
      personPosition: "Content Creator",
    },
  ];

  return (
    <div className="mt-20 ">
      <div className="text-5xl text-center w-full mb-16 font-bold">
        Testimonials
      </div>
      <div className="testimonial-container w-full flex justify-center items-center gap-20 mb-20">
        {testimonial.map(
          ({
            id,
            companyImage,
            description,
            personImage,
            personName,
            personPosition,
          }) => {
            return (
              <div
                key={id}
                className="card h-[17rem] w-[18rem] rounded-md shadow-lg flex flex-col space-y-3  bg-gray-50"
              >
                <div className="header w-full h-[30%] mx-6 text-3xl flex justify-start items-center">
                  <img src={companyImage} alt="" className="h-full p-2" />
                </div>
                <div className="desc h-[35%] mx-8 mb-3 text-gray-500  bg-gray-50">
                  {description}
                </div>
                <div className="h-[20%] flex  flex-row">
                  <div className="personImage w-[40px] mr-5 flex justify-center items-center mx-5">
                    <img
                      src={personImage}
                      alt=""
                      className="rounded-full h-[80%] border-2 border-white mt-5"
                    />
                  </div>
                  <div className="personDesc flex flex-col justify-center items-center  bg-gray-50">
                    <div className="h-[50%] text-xl">{personName}</div>
                    <div className="h-[20%] text-md  text-gray-600">
                      {personPosition}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Testimonial;
