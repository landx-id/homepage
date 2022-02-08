import React, { useEffect, useState } from "react"
import Layout from '../../components/layout/layout';
import ListingProjects from "../../components/listing/listing"
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail"

const DetailProjects = (props) => {
  const [dataListing, setDataListing] = useState('')
  const [codeSaham, setCodeSaham] = useState('')
  const [listingAt, setListingAt] = useState(null)

  useEffect(() => {
    handleListing()
    setCodeSaham(props.params.code.toUpperCase())
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
    fetch('https://web-api.landx.id/mobile/upcoming_project')
      .then(r => r.json())
      .then(data => {
        setDataListing((prevData) => [...prevData, data.upcoming])
      })
  }

  return (
    <>
      <Layout>
        {listingAt > Date.now() ?
          <ListingProjects codeSaham={props.params.code} />
          :
          <ProjectDetail codeSaham={props.params.code} />
        }
      </Layout>
    </>
  )
}

export default DetailProjects
