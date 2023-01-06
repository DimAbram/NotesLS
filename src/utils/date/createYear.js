import { createDate } from "./createDate"
import { createMonth } from "./createMonth"





export const createYear=(y,m)=>{
	const today = createDate()
	const monthCount=12

	const year = y ?? today.year
	const monthNamber=m?? today.monthNamber

	const month = createMonth( new Date(year, monthNamber))

	const getMonthDays=(monthIndex)=>createMonth(new Date(year, monthIndex)).createMonthDays()

	const createYearMonthes=()=>{
		const monthes=[]

		for(let i =0; i<=monthCount-1; i++){
			monthes[i]=getMonthDays(i)
		}

		return monthes
	}
	return {
		createYearMonthes,
		month,
		year,
	}
}
