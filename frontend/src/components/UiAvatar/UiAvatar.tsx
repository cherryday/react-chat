import cn from 'classnames'
import styles from './UiAvatar.module.css'

interface UiAvatarProps {
  src: string
  size?: number
  className?: string
}

export const UiAvatar = ({ src, size = 24, className = '' }: UiAvatarProps): JSX.Element => {
  const style = {
    width: `${size}px`,
    height: `${size}px`
  }

  return (
    <div style={style} className={cn(styles.avatar, className)}>
      <img
        src={src}
        alt="avatar"
        className={styles.img}
      />
    </div>
  )
}
