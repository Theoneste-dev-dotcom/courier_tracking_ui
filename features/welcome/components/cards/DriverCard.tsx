import React from 'react'

interface PropType{
    title: string;
    content:string;
    actions:[string]
}
const Card = ({title, content, actions}: PropType) => {
  return (
    <div>
      <div className="card card-dash bg-base-100 w-96">
        <div className="card-body">
        <h2 className="card-title text-base-content">{title}</h2>
        <p className='text-base-content'>{content}</p>
        <div className="card-actions justify-end">
    {
        actions.map((ac, k) => (
            <button title={`click to ${ac}`} key={k} className="btn btn-primary">{ac}</button>
        ))
    }
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
