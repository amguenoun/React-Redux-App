import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PokemonPages = (props) => (
    <Pagination defaultActivePage={0} totalPages={116} onPageChange={(event, data) => props.handlePageChange(data.activePage)} />
)

export default PokemonPages