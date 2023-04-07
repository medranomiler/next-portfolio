import { Fragment, useEffect } from "react"
import { Dialog, Transition } from '@headlessui/react'

type MyModalProps = {
  message: string;
  isSuccess: boolean;
  isVisible: boolean;
  onClose: () => void;
}

const MyModal = ({ isVisible, onClose, message, isSuccess }: MyModalProps) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVisible]);

  return (
    <>
      <Transition appear show={isVisible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${isSuccess? "bg-green-500": "bg-red-600"}`}>
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-white font-bold leading-6"
                  >
                    {isSuccess? "Success!": "Error!"}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-white">
                      {message}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white"
                      onClick={onClose}
                    >
                      {isSuccess? "Sounds Good!" : "Try Again"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MyModal;