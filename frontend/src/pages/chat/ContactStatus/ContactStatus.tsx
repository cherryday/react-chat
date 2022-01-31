import cn from 'classnames'
import { ReactComponent as CheckIcon } from './check.svg'
import { ReactComponent as InfoIcon } from './info.svg'
import styles from './ContactStatus.module.css'

interface ContactStatusProps {
  count?: number
  status: 'new' | 'sent' | 'seen' | 'error'
}

export const ContactStatus = ({ status, count = 0 }: ContactStatusProps): JSX.Element => {
  const buildChild = () => {
    if (status === 'new') {
      return <span>{count < 9 ? count : `${9}+`}</span>
    } else if (status === 'sent') {
      return <CheckIcon/>
    } else if (status === 'seen') {
      return <CheckIcon/>
    } else if (status === 'error') {
      return <InfoIcon/>
    }
  }

  return (
    <div className={cn(styles.wrapper, {
      [styles.new]: status === 'new',
      [styles.sent]: status === 'sent',
      [styles.seen]: status === 'seen',
      [styles.error]: status === 'error'
    })}>
      {buildChild()}
    </div>
  )
}