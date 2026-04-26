'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export const AppointmentForm = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="brand">Novo Agendamento</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Agende um atendimento</DialogTitle>
        <DialogDescription>
          Preencha os dados do cliente para realizar o agendamento:
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)
