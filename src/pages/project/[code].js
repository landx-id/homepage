import React, { useEffect, useState } from "react"
import ListingProjects from "../../components/listing/listing"
import ProjectDetail from "../../components/project-detail/project-detail"

const DetailProjects = () => {
  const [dataListing, setDataListing] = useState('')
  const [listingAt, setListingAt] = useState(null)

  useEffect(() => {
    handleListing()
  }, [])

  useEffect(() => {
    if (dataListing) {
      dataListing.map(datas => {
        datas.map(data => {
          setListingAt(new Date(data.CAPT['listing_at']).getTime())
        })
      })
    }
  }, [dataListing])

  const handleListing = () => {
    fetch('https://landx.id/lottie/upcoming.json')
      .then(r => r.json())
      .then(data => {
        setDataListing((prevData) => [...prevData, data.upcoming])
      })
  }

  return (
    <>
      {listingAt > Date.now() ?
        <ListingProjects />
        :
        <ProjectDetail />
      }
    </>
  )
}

export default DetailProjects
