import React from 'react'

const Color = (props) => {
  const {colorData,setcolor} = props;
  // const colorArray = colorData.colorData;
  // console.log(colorData);
  return (
    <>
      <ul className='colors ps-0'>
        {/* <li></li> */}
        {
          colorData && colorData?.map((item, index) => {
            return (
              <li onClick={()=>setcolor(item?._id)} style={{ backgroundColor: item?.title, border: '1px solid black' }} key={index}></li>
            )
          })
        }

      </ul>
    </>
  )
}

export default Color
