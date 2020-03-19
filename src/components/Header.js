import React from 'react'

export default function Header() {

  const styles ={
    banner:{
      width:"100%"
    }
  }
  return (
    <div>
      <img alt='Banner' src='https://www.cdc.gov/coronavirus/2019-ncov/images/home-banner.jpg' style={styles.banner}></img>
    </div>
  )
}
