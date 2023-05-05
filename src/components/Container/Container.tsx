import React from 'react'

const Container = (props: any) => {
  return (
      <div className='bg-slate-400 h-[100vh] flex justify-center font-league_spartan text-ljblue'>
          <div className='w-full md:w-[768px] bg-white flex flex-col'>
              {props.children}
          </div>
      </div>
  )
}

export default Container