'use client'

import { addDays, format, isValid } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Popover, PopoverTrigger } from '../ui/popover'

export const DatePicker = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const dateParam = searchParams.get('date')

  const getInitialDate = useCallback(() => {
    if (!dateParam) {
      return
    }

    const [year, month, day] = dateParam.split('-').map(Number)
    const parsedDate = new Date(year, month - 1, day)

    if (!isValid(parsedDate)) {
      return new Date()
    }

    return parsedDate
  }, [dateParam])

  const [date, setDate] = useState<Date | undefined>(getInitialDate)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const updateURLWithDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) {
      return
    }

    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set('date', format(selectedDate, 'yyyy-MM-dd'))
    router.push(`${pathname}?${newParams.toString()}`)
  }

  const handleNavigateDay = (days: number) => {
    const newDate = addDays(date || new Date(), days)
    updateURLWithDate(newDate)
  }

  useEffect(() => {
    const newDate = getInitialDate()

    if (date?.getTime() !== newDate?.getTime()) {
      setDate(newDate)
    }
  }, [date, getInitialDate])

  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => handleNavigateDay(-1)} variant="outline">
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Popover onOpenChange={setIsPopoverOpen} open={isPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            className="w-min[180px] justify-between border-border-primary bg-transparent text-left font-normal text-content-primary hover:border-border-secondary hover:bg-background-tertiary hover:text-content-primary focus:border-border-brand focus-visible:border-border-brand focus-visible:ring-1 focus-visible:ring-border-brand focus-visible:ring-offset-0"
            variant="outline"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-content-brand" />
              {date ? (
                format(date, 'PPP', { locale: ptBR })
              ) : (
                <span>Selecione uma data</span>
              )}
              <span>Selecione uma data</span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
      </Popover>

      <Button onClick={() => handleNavigateDay(1)} variant="outline">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
