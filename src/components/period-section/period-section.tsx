import { Cloudy, Moon, Sun } from 'lucide-react'
import type { AppointmentPeriod } from '@/types/appointment'
import { AppointmentCard } from '../appointment-card/appointment-card'

type PeriodSectionProps = {
  period: AppointmentPeriod
}

const periodIcons = {
  morning: <Sun className="text-accent-blue" />,
  afternoon: <Cloudy className="text-accent-orange" />,
  evening: <Moon className="text-accent-yellow" />,
}

export const PeriodSection = ({ period }: PeriodSectionProps) => (
  <section className="mb-8 rounded-xl bg-background-tertiary">
    <div className="flex items-center justify-between border-[#2E2C30] border-b px-5 py-3">
      <div className="flex items-center gap-2">
        {periodIcons[period.type]}

        <h2 className="text-content-primary text-label-large-size">
          {period.title}
        </h2>
      </div>

      <span className="text-content-secondary text-label-large-size">
        {period.timeRange}
      </span>
    </div>

    {period.appointments.length > 0 ? (
      <div className="px-5">
        <div>
          {period.appointments.map((appointment, index) => (
            <AppointmentCard
              appointment={appointment}
              isFirstInSection={index === 0}
              key={appointment.id}
            />
          ))}
        </div>
      </div>
    ) : (
      <p>Nenhum agendamento para este período</p>
    )}
  </section>
)
