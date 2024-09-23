import ExpandableCardDemo from '@/app/components/event/Card'
import SidebarDemo from '@/app/components/Sidebar'
import React from 'react'

const Event = () => {
  return (
    <div className="min-h-screen bg-blue-200 p-6">
  <SidebarDemo />
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
    {/* Heading */}
    <h2 className="text-2xl font-bold ml-6 sm:ml-20 mb-4">Have a blast in the festival</h2>

    {/* Expandable Card Demo */}
    <div className="pt-12">
      <ExpandableCardDemo />
    </div>
  </div>
</div>


  )
}

export default Event
