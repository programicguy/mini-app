import React from "react";
import ButtonLg from "../components/ButtonLg"

const Earn = () => {
      const tasks = [
        {
          id: 1,
          title: "Join HMP GEM",
          reward: "+1500 $HART",
        },
        {
          id: 2,
          title: "Join HMP GEM",
          reward: "+1500 $HART",
        },
        {
          id: 3,
          title: "Join HMP GEM",
          reward: "+1500 $HART",
        },
      ];
  return (
    <div className="min-h-screen bg-[#0F1933] text-white px-4 py-6 space-y-6 mb-32">
      {/* Limited Tasks Section */}
      <section>
        <h2 className="text-lg font-semibold mb-1">Limited tasks</h2>
        <div className="relative flex items-center justify-between bg-[#152A5B] h-28 rounded-2xl">
          <div className="w-20 h-20 bg-gradient-to-b from-[#00A9FF] to-[#004FC7] rounded-2xl ml-4"></div>
          <span className="text-xs text-center font-medium absolute top-0 right-0 bg-[#0040A0] px-3 py-1 rounded-lg">
            1h 10s
          </span>
          <button>
            <img
              src="right-arrow.svg"
              alt="Limited Task right arrow"
              className="w-4 h-4 mr-2"
            />
          </button>
        </div>
      </section>

      {/* Hart Challenge Section */}
      <section>
        <h2 className="text-lg font-semibold mb-1">Hart challenge</h2>
        <div className="bg-[#152A5B] px-2 py-4 rounded-2xl space-y-4">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-b from-[#00A9FF] to-[#004FC7] rounded-2xl"></div>
              <div>
                <h3 className="text-sm font-medium">Invite 10 friends</h3>
                <p className="text-xs text-[#5E6984]">Get 20,000 $HART</p>
                <p className="text-sm text-[#20BDFF]">0/10</p>
              </div>
            </div>

            <div className="absolute top-0 right-0">
              <ButtonLg
                text="20,000"
                icon="shop-love.svg"
                iconPosition="before"
                className="bg-[#25396A] py-2 rounded-full text-white shadow-lg text-sm px-3"
                onClick={() => console.log("Loved 20,000 Clicked")}
              />
            </div>
          </div>
          <div className="w-full">
            <ButtonLg
              text="Invite Friend"
              className="w-full gradient-button py-2 rounded-xl text-white font-medium shadow-lg px-4"
              onClick={() => console.log("Invite friend Clicked")}
            />
          </div>
        </div>
        <div className="bg-[#152A5B] rounded-2xl flex items-center justify-between text-white mt-2">
          <span className="px-5 py-3">0 Friends invited</span>
          <button>
            <img
              src="right-arrow.svg"
              alt="Limited Task right arrow"
              className="w-4 h-4 mr-2"
            />
          </button>
        </div>
      </section>

      {/* Tasks Section */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Tasks</h2>
        <div className="space-y-4">
          {/* Placeholder Box */}
          <div className="w-full h-24 bg-[#003459] rounded-xl"></div>
          {/* Telegram Story Task */}
          <div className="">
            <ButtonLg
              text="Create Telegram Story"
              icon="instgram.svg"
              iconPosition="after"
              className="w-full py-2 rounded-rounded bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-center font-medium"
              onClick={() => console.log("Create story Clicked")}
            />
          </div>
          {/* Task List */}
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-[#132145] p-4 rounded-2xl"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#003459] rounded-lg mr-2"></div>
                <div>
                  <p className="text-sm text-white">{task.title}</p>
                  <p className="text-[#4884AD] text-xs">{task.reward}</p>
                </div>
              </div>
              <div>
                <ButtonLg
                  text="Start"
                  className="gradient-button py-2 rounded-full text-white font-medium shadow-lg px-4"
                  onClick={() => console.log("Join HMP Button Clicked")}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Earn;
