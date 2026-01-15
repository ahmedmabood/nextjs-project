import React from 'react'

import { FacebookShareButton,TwitterShareButton,WhatsappIcon,WhatsappShareButton,FacebookIcon,TwitterIcon } from 'react-share'
const ShareButton = ({property}) => {
    const shareUrl=`${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`
    const hashtag = property.type ? `#${property.type.replace(/\s/g,'')}ForRent` : ''
  return (
             <>
             <h3 className="text-xl font-bold text-center pt-2">Share this property</h3>
             <div className="flex gap-3 justify-center pb-5">
                <FacebookShareButton url={shareUrl} quote={property.name} hashtag={hashtag}>
                 <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                                <WhatsappShareButton url={shareUrl} quote={property.name} hashtag={hashtag}>
                 <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                                <TwitterShareButton url={shareUrl} title={property.name} 
                                 separator=':: '
                                >
                 <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
             </div>
             </>
  )
}

export default ShareButton