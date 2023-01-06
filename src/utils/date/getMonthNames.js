import { createDate } from "./createDate"

export const getMonthNames=()=>{
	const monthesNames=Array.from({length: 12})


	const d=new Date()

	monthesNames.forEach((_, i)=>{
		const {month, monthIndex, monthShort, date}=createDate(new Date(d.getFullYear(), d.getMonth()+i))
		monthesNames[monthIndex]={month, monthShort, monthIndex, date}
	})
	return monthesNames
}
