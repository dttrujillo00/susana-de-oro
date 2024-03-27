import './ErrorNotification.css'

type ErrorNotificationProps = {
    errorMessage: string;
}

export const ErrorNotification = ({ errorMessage }: ErrorNotificationProps) => {
  return (
    <div className='error-notification'>
        <small>{ errorMessage }</small>
    </div>
  )
}
