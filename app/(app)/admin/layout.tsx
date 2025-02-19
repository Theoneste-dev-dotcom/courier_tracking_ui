import React from 'react'
import Layout from '@/containers/Layout'
const AppRootLayout = ({children} :{children: React.ReactNode}) => {
  return (
    <div>
      <Layout>
        {children}
      </Layout>
    </div>
  )
}

export default AppRootLayout
