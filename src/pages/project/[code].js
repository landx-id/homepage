import React, { useEffect, useState } from "react"
import ListingProjects from "../../components/listing/listing"
import ProjectDetail from "../../components/project-detail/project-detail"
import { useLocation } from '@reach/router';

const DetailProjects = () => {
  const [dataListing, setDataListing] = useState('')
  const [codeSaham, setCodeSaham] = useState('')
  const [listingAt, setListingAt] = useState(null)

  let location = useLocation()

  useEffect(() => {
    handleListing()
    setCodeSaham(location.pathname.split('/')[2].toUpperCase())
  }, [])

  useEffect(() => {
    if (dataListing) {
      dataListing.map(datas => {
        datas.map(data => {
          if (codeSaham === Object.keys(data)[0]) {
            setListingAt(new Date(data[codeSaham]['listing_at']).getTime())
          }
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
