import { cookies } from 'next/headers'
import AnalyticsDashboard from './components/AnalyticsDashboard'

export default function AnalyticsPage() {
  const cookieStore = cookies()
  const lastDateFilter = cookieStore.get('lastDateFilter')
  const lastUserType = cookieStore.get('lastUserType')

  return (
    <AnalyticsDashboard
      initialDateFilter={lastDateFilter?.value}
      initialUserType={lastUserType?.value}
    />
  )
}