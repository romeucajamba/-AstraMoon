import { cn } from '../lib/utils'

const LoadingSpinner = ({
  className,
  classNameContainer,
}: {
  className?: string
  classNameContainer?: string
}) => {
  return (
    <div
      className={cn(
        'flex h-20 w-full place-content-center place-items-center overflow-hidden',
        classNameContainer,
      )}
    >
      <div
        className={cn(
          'inline-block size-6 animate-spin rounded-full border-[0.188rem] border-violet-200 border-t-transparent  text-violet-500',
          className,
        )}
        role="status"
        aria-label="loadingSpinner"
      >
        <span className="sr-only ">Loading...</span>
      </div> 
   
    </div>
  )
}

export default LoadingSpinner
