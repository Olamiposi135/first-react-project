import React from "react";

const Cards = () => {
  const userCard = [
    {
      image:
        "https://as2.ftcdn.net/jpg/02/89/49/35/1000_F_289493508_VmMO1w4Tb71CFn4NHvmUEVLSn1ztxIkJ.jpg",
      plan: "Single User",
      amount: "$149",
      storage: "500 GB Storage",
      users: "1 Granted User",
      maxsent: "Send up to 2 GB",
      button: "Start Trial",
    },
    {
      image: "https://static.thenounproject.com/png/4852526-200.png",
      plan: "Single User",
      amount: "$149",
      storage: "500 GB Storage",
      users: "1 Granted User",
      maxsent: "Send up to 2 GB",
      button: "Start Trial",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE6_HuGTRgp1fbFcjflJWVLzDpLS_dJQl8YUKOFGLjRR_BU0GXQMVB4WBS9cmeAAf5vQ&usqp=CAU",
      plan: "Single User",
      amount: "$149",
      storage: "500 GB Storage",
      users: "1 Granted User",
      maxsent: "Send up to 2 GB",
      button: "Start Trial",
    },
  ];

  return (
    <section className="bg-white text-black w-full py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {userCard.map((card) => (
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 ">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={card.image}
              alt="/"
            />
            <h2 className="text-2xl text-center font-bold py-8">{card.plan}</h2>
            <p className="text-center text-4xl font-bold">{card.amount}</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">{card.storage}</p>
              <p className="py-2 border-b mx-8">{card.users}</p>
              <p className="py-2 border-b mx-8">{card.maxsent}</p>
            </div>
            <button className="text-black w-[200px] rounded-md font-medium my-6 mx-auto  py-3 bg-emerald-300   hover:bg-black hover:text-emerald-300 ease-in-out duration-500">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
