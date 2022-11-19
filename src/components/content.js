import React from 'react'

function Content() {
  return (
    (() => {
        let divs = [];
        for (var i = 0; i < 100; i++) {
            divs.push(<div>{`we are at row ${i}`}</div>)
        }
        return divs
    })()
  )
}

export default Content
