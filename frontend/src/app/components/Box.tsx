// components/Box.js
import { RiCommunityLine } from "react-icons/ri";
import { LiaConnectdevelop } from "react-icons/lia";
import { SiCoinmarketcap } from "react-icons/si";
import { PiMonitorDuotone } from "react-icons/pi";
import { GiTreeGrowth } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";

/**
 * @function Box
 * @description A component displaying a grid of boxes, each with an icon and information related to different services like community, market analytics, AI, etc.
 * @returns {JSX.Element} - A series of styled boxes with icons and text.
 */
const Box = () => {
  return (
    <div className="m-4 p-8 mx-64">
      <div className="grid grid-cols-4 gap-4">
        {/* Large descriptive box */}
        <div className="p-8 m-8 shadow-lg rounded-md col-span-2 bg-gray-50">
          <h4 className="text-green-700 text-3xl">Groups for everything</h4>
          <div className="text-zinc-400 mt-1">
            <div>TravelWeb Groups: Unite. Share. Thrive. Join a community!</div>
            <div className="mt-1">
              Connect with like-minded individuals, fostering growth in a
              vibrant, supportive ecosystem.
            </div>
          </div>
        </div>

        {/* Community box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <RiCommunityLine className="text-5xl" />
          <h6 className="text-2xl">Community</h6>
          <div className="text-zinc-400">
            <div>For the community By the community.</div>
            <div>Join please, okay.</div>
          </div>
        </div>

        {/* Market Analytics box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <GrAnalytics className="text-5xl" />
          <h6 className="text-2xl">Market Analytics</h6>
          <div className="text-zinc-400">
            <div>We analyze the market for you</div>
            <div>Start Analyzing today!</div>
          </div>
        </div>
      </div>

      {/* growAI box */}
      <div className="grid grid-cols-4 gap-4">
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <GiTreeGrowth className="text-5xl" />
          <h6 className="text-2xl">TravelAI</h6>
          <div className="text-zinc-400">
            <div>Enabling you by personalization</div>
            <div>Start traveling with us now.</div>
          </div>
        </div>

        {/* Crop Monitoring box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <PiMonitorDuotone className="text-5xl" />
          <h6 className="text-2xl">Online Access</h6>
          <div className="text-zinc-400">
            <div>We are with you 24/7 online.</div>
            <div></div>
          </div>
        </div>

        {/* Farmerce box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <SiCoinmarketcap className="text-5xl" />
          <h6 className="text-2xl">Traverce</h6>
          <div className="text-zinc-400">
            <div>Sell and Buy products here!</div>
            <div>Travelling Ecommerce</div>
          </div>
        </div>

        {/* Connect box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <LiaConnectdevelop className="text-5xl" />
          <h6 className="text-2xl">Connect!</h6>
          <div className="text-zinc-400">
            <div>Connect with fellow travellers.</div>
            <div>Start learning and sharing today</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
