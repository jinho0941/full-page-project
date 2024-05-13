import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type Props = {
  isSelected: boolean
  font: string
  name: string
}

export const TransformName = ({ isSelected, font, name }: Props) => {
  return (
    isSelected && (
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={cn('text-4xl mb-1 ', font)}
      >
        {name}
      </motion.h2>
    )
  )
}
