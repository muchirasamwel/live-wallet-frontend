import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { DynamicObject } from '../../types/objects'

type Props = {
  rows: Array<Object>
  cols: Array<String>
}

export default function SimpleTable (props: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow style={{ background: 'black' }}>
            {props.cols.map((col, index) => (
              <TableCell key={index} style={{ color: 'white' }}>
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row: DynamicObject, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {props.cols.map((col, index) => {
                const k = col as keyof typeof row
                return (
                  <TableCell key={index} component='th' scope='row'>
                    {row[k]}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
