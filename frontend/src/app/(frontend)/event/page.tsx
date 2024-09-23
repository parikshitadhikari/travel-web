import ExpandableCardDemo from '@/app/components/event/Card'
import SidebarDemo from '@/app/components/Sidebar'
import React from 'react'

const Event = () => {
  return (
    <div>
      <SidebarDemo/>
      <div className="pt-12">
      <ExpandableCardDemo/>
      </div>
    </div>
  )
}

export default Event
