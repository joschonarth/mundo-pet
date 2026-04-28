import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Popover, PopoverTrigger } from '../ui/popover'

export const DatePicker = () => (
  <div className="flex items-center gap-2">
    <Button variant="outline">
      <ChevronLeft className="h-4 w-4" />
    </Button>

    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-min[180px] justify-between border-border-primary bg-transparent text-left font-normal text-content-primary hover:border-border-secondary hover:bg-background-tertiary hover:text-content-primary focus:border-border-brand focus-visible:border-border-brand focus-visible:ring-1 focus-visible:ring-border-brand focus-visible:ring-offset-0"
          variant="outline"
        >
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-content-brand" />
            <span>Selecione uma data</span>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
    </Popover>

    <Button variant="outline">
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
)
