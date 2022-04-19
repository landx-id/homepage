import React, { useEffect, useState } from "react"
import Layout from '../../components/layout/layout';
import ListingProjects from "../../components/listing/listing"
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail"

const DetailProjects = (props) => {
  const [dataListing, setDataListing] = useState('')
  const [dataProject, setdataProject] = useState('')
  const [codeSaham, setCodeSaham] = useState('')
  const [listingAt, setListingAt] = useState(null)

  useEffect(() => {
    handleListing()
    setCodeSaham(props.params.code.toUpperCase())
  }, [])

  useEffect(() => {
    if (dataListing) {
      dataListing[0].map((data, i) => {
        if (codeSaham === data.attributes.currency.toUpperCase()) {
          setdataProject(data.attributes)
          let listingAt = new Date(data.attributes.listing_at).getTime()
          setListingAt(listingAt)
        }
      })
    }
  }, [dataListing])

  const handleListing = () => {
    fetch('https://content.landx.id/api/upcomings')
      .then(r => r.json())
      .then(data => {
        setDataListing((prevData) => [...prevData, data.data])
      })
  }

  const showProject = () => {
    if (dataProject.hide_schedule) {
      return <ListingProjects codeSaham={props.params.code} />
    } else if (listingAt > Date.now()) {
      return <ListingProjects codeSaham={props.params.code} />
    } else {
      return <ProjectDetail codeSaham={props.params.code} />
    }
  }

  return (
    <>
      <Layout>
        {showProject()}
      </Layout>
    </>
  )
}

export default DetailProjects
