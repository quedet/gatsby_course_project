import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return <Layout title={'Not Found!'}>
      <div className="not__found">
        <div className="not__found__wrapper">
          <h1 className="title"><span className="title__text__secondary">Page</span>{' '}<span className="title__text__emphasis">Not Found !</span></h1>
          <p>
            <Link to="/">Go home</Link>.
          </p>
        </div>
      </div>
    </Layout>
}

export default NotFoundPage
