import AnalyticsDashboard from '@/components/AnalyticsDashboard'
import { getData } from '@/utils'
import { analytics } from '@/utils/analytics'
import React from 'react'

const Page = async () => {
    const TRACKING_DAYS = 7

    const pageviews = await analytics.retrieveDays("pageview", TRACKING_DAYS)

    const totalPageviews = pageviews.reduce((acc, curr) => {
        return (
            acc + curr.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0]!
            }, 0)
        )
    }, 0)

    const avgVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1)

    const amtVisitorsToday = pageviews
        .filter((ev) => ev.date === getData())
        .reduce((acc, curr) => {
          return (
            acc + curr.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0]!
            }, 0)
        )
        }, 0)
    
    const topCountries = new Map<string, number>()

    for (let i = 0; i < pageviews.length; i++) {
        const day = pageviews[i];
        if (!day) continue
        
        for (let j = 0; j < day.events.length; j++) {
            const event = day.events[j];
            if (!event) continue
            
        }
        
    }
  return (
      <div className="min-h-screen w-full py-12 flex justify-center items-center">
          <div className="relative w-full max-w-6xl mx-auto text-white">
              <AnalyticsDashboard
                  avgVisitorsPerDay={avgVisitorsPerDay}
                  amtVisitorsToday={amtVisitorsToday}
                  timeseriesPageviews={pageviews}
              />
          </div>
    </div>
  )
}

export default Page