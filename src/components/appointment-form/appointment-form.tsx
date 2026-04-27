'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Dog, Phone, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const appointmentFormSchema = z.object({
  tutorName: z.string().min(3, 'O nome do tutor é obrigatório'),
  petName: z.string().min(3, 'O nome do pet é obrigatório'),
  phone: z.string().min(11, 'O telefone é obrigatório'),
  description: z.string().min(3, 'A descrição é obrigatória'),
})

type AppointFormValues = z.infer<typeof appointmentFormSchema>

export const AppointmentForm = () => {
  const form = useForm<AppointFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      tutorName: '',
      petName: '',
      phone: '',
      description: '',
    },
  })

  const onSubmit = (data: AppointFormValues) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand">Novo Agendamento</Button>
      </DialogTrigger>

      <DialogContent
        overlayVariant="blurred"
        showCloseButton
        variant="appointment"
      >
        <DialogHeader align="center">
          <DialogTitle size="modal">Agende um atendimento</DialogTitle>
          <DialogDescription size="modal">
            Preencha os dados do cliente para realizar o agendamento:
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="tutorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-content-primary text-label-medium-size">
                    Nome do tutor
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User
                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-content-brand"
                        size={20}
                      />
                      <Input
                        className="pl-10"
                        placeholder="Nome do tutor"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="petName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-content-primary text-label-medium-size">
                    Nome do pet
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Dog
                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-content-brand"
                        size={20}
                      />
                      <Input
                        className="pl-10"
                        placeholder="Nome do pet"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-content-primary text-label-medium-size">
                    Telefone
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone
                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-content-brand"
                        size={20}
                      />
                      <IMaskInput
                        className="flex h-12 w-full rounded-md border border-border-primary bg-background-tertiary px-3 py-2 pl-10 text-content-primary text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-content-secondary hover:border-border-secondary focus:border-border-brand focus-visible:border-border-brand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-brand focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20"
                        mask="(00) 00000-0000"
                        placeholder="(99) 99999-9999"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-content-primary text-label-medium-size">
                    Descrição do serviço
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="Descrição do serviço"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Salvar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
