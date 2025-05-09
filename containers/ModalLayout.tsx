import { useEffect } from 'react'
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'
import AddLeadModalBody from '../features/leads/components/AddBranchModalBody'
import AddDriverModalBody from '@/features/user/components/AddUser'
import AddBranchModalBody from '../features/leads/components/AddBranchModalBody'
import AddUser from '@/features/user/components/AddUser'
import ConfirmationModalBody from '@/features/common/components/ConfirmationModalBody'
import { RootState } from "@/lib/store";
function ModalLayout(){

    const {isOpen, bodyType, size, extraObject, title} = useSelector((state:RootState) => state.modal)
    const dispatch = useDispatch()

    const close = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(closeModal(e))
    }



    return(
        <>
        {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={(e) => close(e)}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center text-base-content">{title}</h3>


                {/* Loading modal body according to different modal type */}
                {
                    {
                             [MODAL_BODY_TYPES.BRANCH_ADD_NEW] : <AddBranchModalBody closeModal={close} extraObject={extraObject}/>,
                             [MODAL_BODY_TYPES.DRIVER_ADD_NEW] : <AddUser closeModal={close} extraObject={extraObject}/>,
                             [MODAL_BODY_TYPES.OFFICER_ADD_NEW] : <AddUser closeModal={close} extraObject={extraObject}/>,
                             [MODAL_BODY_TYPES.ADMIN_ADD_NEW] : <AddUser closeModal={close} extraObject={extraObject}/>,
                             [MODAL_BODY_TYPES.CONFIRMATION] : <ConfirmationModalBody extraObject={extraObject} closeModal={close}/>,
                             [MODAL_BODY_TYPES.DEFAULT] : <div></div>
                    }[bodyType]
                }
            </div>
            </div>
            </>
    )
}

export default ModalLayout