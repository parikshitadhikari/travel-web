// components/Box.js
import { RiCommunityLine } from "react-icons/ri";
import { LiaConnectdevelop } from "react-icons/lia";
import { SiCoinmarketcap } from "react-icons/si";
import { PiMonitorDuotone } from "react-icons/pi";
import { GiTreeGrowth } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";

/**
 * @function Box
 * @description A component displaying a grid of boxes, each with an icon and information related to different tourism services like community, analytics, etc.
 * @returns {JSX.Element} - A series of styled boxes with icons and text.
 */
const Box = () => {
  return (
    <div className="m-4 p-8 mx-64">
      <div className="grid grid-cols-4 gap-4">
        {/* Large descriptive box */}
        <div className="p-8 m-8 shadow-lg rounded-md col-span-2 bg-gray-50">
          <h4 className="text-green-700 text-3xl">Explore Together</h4>
          <div className="text-zinc-400 mt-1">
            <div>Join travel communities: Share experiences and tips.</div>
            <div className="mt-1">
              Connect with fellow travelers to enrich your journeys!
            </div>
          </div>
        </div>

        {/* Community box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <RiCommunityLine className="text-5xl" />
          <h6 className="text-2xl">Travel Community</h6>
          <div className="text-zinc-400">
            <div>For travelers, by travelers.</div>
            <div>Join us to discover new adventures!</div>
          </div>
        </div>

        {/* Market Analytics box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <GrAnalytics className="text-5xl" />
          <h6 className="text-2xl">Travel Insights</h6>
          <div className="text-zinc-400">
            <div>We analyze travel trends for you</div>
            <div>Start planning smarter today!</div>
          </div>
        </div>
      </div>

      {/* Travel Planning box */}
      <div className="grid grid-cols-4 gap-4">
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <GiTreeGrowth className="text-5xl" />
          <h6 className="text-2xl">Personalized Trips</h6>
          <div className="text-zinc-400">
            <div>Tailored travel experiences just for you</div>
            <div>Start planning your dream trip now.</div>
          </div>
        </div>

        {/* Destination Monitoring box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <PiMonitorDuotone className="text-5xl" />
          <h6 className="text-2xl">Destination Insights</h6>
          <div className="text-zinc-400">
            <div>Monitor travel destinations for the best experiences</div>
            <div>Stay informed with real-time updates!</div>
          </div>
        </div>

        {/* Travel Marketplace box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <SiCoinmarketcap className="text-5xl" />
          <h6 className="text-2xl">Travel Marketplace</h6>
          <div className="text-zinc-400">
            <div>Buy and book your travel essentials here!</div>
            <div>Explore exclusive offers and deals.</div>
          </div>
        </div>

        {/* Connect box */}
        <div className="p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <LiaConnectdevelop className="text-5xl" />
          <h6 className="text-2xl">Connect!</h6>
          <div className="text-zinc-400">
            <div>Network with fellow travelers.</div>
            <div>Share tips and learn from each other!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
