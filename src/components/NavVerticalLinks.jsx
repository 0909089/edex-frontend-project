import React from 'react'

function NavVerticalLinks(props) {

  const links = props.links;

  return (
    <div>
      {
        links.map(link => (
          <li>{link.text}</li>
        ))
      }
    </div>
  )
}

export default NavVerticalLinks