import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PokemonPages = (props) => (
    <Pagination defaultActivePage={1} totalPages={116} className="page" onPageChange={(event, data) => props.handlePageChange(data.activePage)} />
)

export default PokemonPages