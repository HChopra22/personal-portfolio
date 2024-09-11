const Modal = ({ isOpen, onClose, title, extendedDescription, media }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white dark:bg-background p-6 rounded-lg max-w-lg mx-auto'>
        <h2 className='text-2xl mb-4'>{title}</h2>
        <p className='text-lg mb-6'>{extendedDescription}</p>
        {media && (
          <div className='mb-4'>
            {media.endsWith('.mp4') ? (
              <video controls className='w-full'>
                <source src={media} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={media} alt={`${title} media`} className='w-full h-auto' />
            )}
          </div>
        )}
        <button className='mt-6 px-4 py-2 bg-primary text-white rounded-md' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
