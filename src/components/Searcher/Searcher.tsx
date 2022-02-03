import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Searcher.css';

export function Searcher(): JSX.Element {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState<string>('USA');

	function handleSubmit(): void {
		navigate(`/countries/${searchTerm}`);
	}

	function changeSearchTerm(event: any): void {
		setSearchTerm(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label className="find-label">
				Country:
				<input
					className="find-input"
					type="text"
					name="Country Name"
					placeholder="Country"
					value={searchTerm}
					onChange={changeSearchTerm}
				/>
			</label>
			<input className="find-submit" type="submit" value="🔍" />
		</form>
	);
}
