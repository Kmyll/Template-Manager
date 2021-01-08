import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import items from './data';

export default function SearchPage() {
	const [ value, setValue ] = useState('');
	const [ searchValue, setSearchValue ] = useState('');

	const handleOnSelect = (item) => {
		setValue(item.name);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setSearchValue(value);
	};

	return (
		<div className='searchTemplateContainer'>
			<h1>Create new email</h1>
			<p>Search for a gym</p>
			<form onSubmit={onSubmit}>
				<div style={{ width: 400 }}>
					<ReactSearchAutocomplete
						items={items}
						// onSearch={handleOnSearch}
						onSelect={handleOnSelect}
						// onFocus={handleOnFocus}
						autoFocus
					/>
				</div>
				<button type='submit'>Search</button>
			</form>
			<p>{searchValue}</p>
		</div>
	);
}
