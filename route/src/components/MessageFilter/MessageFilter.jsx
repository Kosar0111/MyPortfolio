import { useState } from 'react'

const MessageFilter = ({ setSearchParams, postQuery, latest }) => {
  const [search, setSearch] = useState(postQuery)
  const [checked, setChecked] = useState(latest)

  const hundleSubmit = e => {
    e.preventDefault()
    const form = e.target

    const query = form.search.value
    const isLatest = form.latest.checked

    const params = {}

    if (query.length) params.post = query
    if (isLatest) params.latest = true

    setSearchParams(params)
  }

  return (
    <form
      onSubmit={hundleSubmit}
      className='search-form'
    >
      <input
        type='search'
        name='search'
        className='search-field'
        placeholder='Sort by title'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <label className='check'>
        <input
          type='checkbox'
          name='latest'
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        Only new
      </label>

      <input
        type='submit'
        value='search'
        className='search-btn'
      ></input>
    </form>
  )
}

export default MessageFilter
