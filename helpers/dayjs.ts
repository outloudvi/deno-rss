import dayjs from 'dayjs'
import dayjsUtc from 'dayjs/plugin/utc.js'
import dayjsCPF from 'dayjs/plugin/customParseFormat.js'

dayjs.extend(dayjsUtc)
dayjs.extend(dayjsCPF)

export default dayjs
