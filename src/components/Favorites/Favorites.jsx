import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector} from 'react-redux'


import { nanoid } from 'nanoid'
// import st from './Favorites.module.scss'
import { FavoriteItem } from './FavoriteItem'

export const Favorites = () => {
	const { note } = useParams()
	const notes = useSelector(state => state.notes)
	const favorites=useMemo(()=>{
		let i = notes.findIndex(el => el.id === note)
		return notes[i].favorites
	},[note, notes])


	return (
	<>
		{favorites.map((elem, iFavorite)=>{
			return <FavoriteItem key={nanoid()} text={elem} iFavorite={iFavorite} id={note}/>
		})}
	</>
	)
}
