import React from 'react'

function ProductHeadingGradient({titleOne, titleTwo, size}) {
  return <div className="w-100 py-3 product-heading bg-transparent">
      <h1 className="h1 text-dark fw-semibold" style={{fontSize:(size ? size +'px' : '3rem')}}>
        <span className="gradient-title text-capitalize">
          {titleOne}
        </span>
        <span className="title-two text-secondary">
          {titleTwo}
        </span>
      </h1>
    </div>;
}

export default ProductHeadingGradient