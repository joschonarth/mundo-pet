import { Dog } from 'lucide-react'
import Link from 'next/link'

export const Logo = () => (
  <Link
    className="flex w-fit items-center gap-4 rounded-b-lg bg-[#2E2C30] p-3"
    href="/"
  >
    <div className="flex h-8 w-8 items-center justify-center rounded bg-background-brand">
      <Dog />
    </div>

    <span className="font-bold text-content-brand text-label-large-size">
      MUNDO PET
    </span>
  </Link>
)
