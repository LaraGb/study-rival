import React from 'react'
import Table from 'shared/components/global/table-field/TableField'

const header = ['status','task Name', 'current timer', 'timer'];
const body = [{
    id:0,
    content:['check', 'namee', '19:00', '20:00']
},
{
    id:0,
    content:['check', 'namee', '19:00', '20:00']
},
{
    id:0,
    content:['check', 'namee', '19:00', '20:00']
}
];

export default function Index() {
  return (
    <div>
      <Table headerlabels={header} bodyContent={body}/>
    </div>
  )
}
