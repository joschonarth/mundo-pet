import { AppointmentForm } from '@/components/appointment-form/appointment-form'
import { PeriodSection } from '@/components/period-section'
import { APPOINTMENT_DATA, groupAppointmentByPeriod } from '@/utils'

export default function Home() {
  const periods = groupAppointmentByPeriod(APPOINTMENT_DATA)

  return (
    <div className="bg-background-primary p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-content-primary text-title-size">
            Sua Agenda
          </h1>
          <p className="text-content-secondary text-paragraph-medium-size">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>

      <div className="pb-24 md:pb-0">
        {periods.map((period) => (
          <PeriodSection key={period.type} period={period} />
        ))}
      </div>

      <div>
        <AppointmentForm />
      </div>
    </div>
  )
}
