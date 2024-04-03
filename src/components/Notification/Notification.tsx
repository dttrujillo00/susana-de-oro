import './Notification.css'

type NotificationProps = {
    status: string;
    message: string;
}

export const Notification = ({ status, message }: NotificationProps) => {
  return (
    <div className={ `notification ${status}` }>
        <small>{ message }</small>
    </div>
  )
}
