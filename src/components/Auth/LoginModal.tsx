import { Fragment, useEffect } from "react"
import { Dialog, Transition } from '@headlessui/react'
import LoginComponent from "./LoginComponent"

type RepoModalProps = {
  isVisible: boolean;
  onClose: () => void;
}

const RepoModal = ({ isVisible, onClose }: RepoModalProps) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVisible]);

  // 1. import modal component to file or component where it is needed
  //    import RepoModal from "./RepoModal"
  //    import { useState } from "react"
  //    <RepoModal isVisible={isVisible} message={message} onClose={() => setIsVisible(false)} />
  // 2. add isVisible, onClose, message props
  //    const [isVisible, setIsVisible] = useState(false);
  //    const [message, setMessage] = useState("")
  // 3. define function that triggers modal and sets the modal message
  //    const openModal = () => {
  //    setIsVisible(true)
  //    setMessage("This is the modal message")
  //    }
  // 4. add function click event to element 
  //    onClick={openModal}

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-slate-100 dark:bg-gray-900">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-white font-bold leading-6"
                  >
                  </Dialog.Title>
                  <div className="mt-2">
                  <LoginComponent />
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

export default RepoModal;