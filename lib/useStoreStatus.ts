'use client'

import { useEffect, useState } from 'react'

interface StoreStatus {
  isOpen: boolean
  label: string
  colorClass: string
}

export function useStoreStatus(): StoreStatus {
  const [status, setStatus] = useState<StoreStatus>({
    isOpen: true,
    label: '🟢 Buka Sekarang',
    colorClass: 'text-green-400',
  })

  useEffect(() => {
    const check = () => {
      const now = new Date()
      // WIB = UTC+7
      const wibHour = (now.getUTCHours() + 7) % 24
      const open = wibHour >= 7 && wibHour < 21
      setStatus({
        isOpen: open,
        label: open ? '🟢 Buka Sekarang' : '🔴 Tutup · Buka 07.00 WIB',
        colorClass: open ? 'text-green-400' : 'text-red-400',
      })
    }
    check()
    const interval = setInterval(check, 60_000)
    return () => clearInterval(interval)
  }, [])

  return status
}
