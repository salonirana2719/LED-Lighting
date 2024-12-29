const testimonials = [
  {
    name: "Priyanka Shukla",
    role: "Product Management",
    rating: 5.0,
    feedback:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classicalwords g industry.popular belief, Lorem Ipsum is not simply random text g industry.popular belief, Lorem Ipsum is not simply random text  It has roots in a piece of classicalwords g industry.popular belief”",
    image: "/girl.svg", // Replace with actual image paths
  },
  {
    name: "Akshay Narayan",
    role: "Product Management",
    rating: 5.0,
    feedback:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classicalwords g industry.popular belief, Lorem Ipsum is not simply random text g industry.popular belief, Lorem Ipsum is not simply random text It has roots in a piece of classicalwords g industry.popular belief”.0",
    image: "/boy.svg", // Replace with actual image paths
  },
];

const ClientTestimonials = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <h2 className="text-purple-600 text-xl md:text-3xl ml-6 font-bold text-left mb-6">
        What Clients <br /> Our Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 gap-10  bg-white  flex-col flex md:flex-row "
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className=" mb-2 w-[200px]"
            />

            <div>
              <h3 className="text-2xl   font-bold ">{testimonial.name}</h3>

              <p className="mt-2  text-gray-600 text-sm ">
                {testimonial.feedback}
              </p>
              <div className="flex items-center gap-24 mt-2">
                <p className="text-yellow-500">{testimonial.role}</p>
                <div className="flex">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className=" ml-1">{testimonial.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
