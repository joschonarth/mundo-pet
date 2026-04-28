import { endOfDay, parseISO, startOfDay } from 'date-fns'
import { AppointmentForm } from '@/components/appointment-form/appointment-form'
import { DatePicker } from '@/components/date-picker'
import { PeriodSection } from '@/components/period-section'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { groupAppointmentByPeriod } from '@/utils'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>
}) {
  const { date } = await searchParams
  const selectedDate = date ? parseISO(date) : new Date()

  const appointments = await prisma.appointment.findMany({
    where: {
      scheduleAt: {
        gte: startOfDay(selectedDate),
        lte: endOfDay(selectedDate),
      },
    },
    orderBy: {
      scheduleAt: 'asc',
    },
  })

  const periods = groupAppointmentByPeriod(appointments)

  return (
    <div className="bg-background-primary p-6">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 text-content-primary text-title-size">
            Sua Agenda
          </h1>
          <p className="text-content-secondary text-paragraph-medium-size">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <DatePicker />
        </div>
      </div>

      <div className="mt-3 mb-8 md:hidden">
        <DatePicker />
      </div>

      <div className="pb-24 md:pb-0">
        {periods.map((period) => (
          <PeriodSection key={period.type} period={period} />
        ))}
      </div>

      <div className="fixed right-0 bottom-0 left-0 flex justify-center bg-[#23242C] px-6 py-[18px] md:top-auto md:right-6 md:bottom-6 md:left-auto md:w-auto md:bg-transparent md:p-0">
        <AppointmentForm>
          <Button variant="brand">Novo Agendamento</Button>
        </AppointmentForm>
      </div>
    </div>
  )
}
