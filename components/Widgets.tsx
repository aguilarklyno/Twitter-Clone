import React from 'react'
import { SearchIcon } from "@heroicons/react/outline"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className='col-span-2 mt-2 px-2 hidden lg:inline'>
      <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
        <SearchIcon className="h-5 w-5 text-gray-400"/>
        <input 
          type="tsxt"
          placeholder="Search Twitter"
          className='flex-1 bg-transparent outline-none'
        />
      </div>

      <TwitterTimelineEmbed
      sourceType="profile"
      screenName="DSL_Tw"
      options={{height: 1000}}
      />
    </div>
  )
}

export default Widgets