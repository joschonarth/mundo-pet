'use client'

import {
  Trash2 as DeleteIcon,
  Pen as EditIcon,
  Loader2 as LoadingIcon,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { deleteAppointment } from '@/app/actions'
import { cn } from '@/lib/utils'
import type { Appointment } from '@/types/appointment'
import { AppointmentForm } from '../appointment-form/appointment-form'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'

type AppointmentCardProps = {
  appointment: Appointment
  isFirstInSection?: boolean
}

export const AppointmentCard = ({
  appointment,
  isFirstInSection = false,
}: AppointmentCardProps) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)

    const result = await deleteAppointment(appointment.id)

    if (result?.error) {
      toast.error(result.error)
      return
    }

    toast.success('Agendamento removido com sucesso!')
    setIsDeleting(false)
  }

  return (
    <div
      className={cn(
        'grid grid-cols-2 items-center py-3 md:grid-cols-[15%_35%_30%_20%]',
        !isFirstInSection && 'border-[#353339] border-t'
      )}
    >
      <div className="pr-4 text-left md:pr-0">
        <span className="font-semibold text-content-primary text-label-small">
          {appointment.time}
        </span>
      </div>

      <div className="text-right md:pr-4 md:text-left">
        <div className="flex items-center justify-end gap-1 md:justify-start">
          <span className="font-semibold text-content-primary text-label-small-size">
            {appointment.petName}
          </span>
          <span className="text-content-secondary text-paragraph-small-size">
            /
          </span>
          <span className="text-content-secondary text-paragraph-small-size">
            {appointment.tutorName}
          </span>
        </div>
      </div>

      <div className="col-span-2 mt-1 hidden pr-4 text-left md:col-span-1 md:mt-0 md:block">
        <span className="text-content-secondary text-paragraph-small-size">
          {appointment.description}
        </span>
      </div>

      <div className="col-span-2 mt-2 flex items-center justify-end gap-2 text-right md:col-span-1 md:mt-0">
        <AppointmentForm appointment={appointment}>
          <Button size="icon" variant="edit">
            <EditIcon size={16} />
          </Button>
        </AppointmentForm>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="icon" variant="remove">
              <DeleteIcon size={16} />
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remover agendamento</AlertDialogTitle>
              <AlertDialogDescription>
                Tem certeza que deseja remover este agendamento? Esta ação não
                pode ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction disabled={isDeleting} onClick={handleDelete}>
                {isDeleting && (
                  <LoadingIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Confirmar remoção
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
