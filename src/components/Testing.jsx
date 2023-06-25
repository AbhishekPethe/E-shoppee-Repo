import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
background : gray;
color : white;

height : auto;
width : auto;
border : 2px solid green;

h3{
    color : blue;
}
.ptag{
    color : red;
}
.ptag{
    p{
        color : green;
    }
}


`


const Testing = () => {
  return (
      <Wrapper>
          <h3>
              Yo
          </h3>
          <p className="ptag">
              Re
              <p>
                  RERE
              </p>
          </p>
    </Wrapper>
  )
}

export default Testing