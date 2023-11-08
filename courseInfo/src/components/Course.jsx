import React from 'react'
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"


export default function Course({course : {name, parts}}) {
    

    return (
        <div>
        <Header course={name} />
        <Content parts={parts} />
        <Total total={parts.reduce((acc, curr) => acc + curr.exercises, 0)} />
      </div>
    )
}
