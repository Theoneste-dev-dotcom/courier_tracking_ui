import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { CONFIRMATION_MODAL_CLOSE_TYPES} from '../../../utils/globalConstantUtil'
import { deleteLead } from '../../leads/leadSlice'
import { baseUrl } from '@/utils/app_data'
import { showNotification } from '../headerSlice'

interface ConfirmationPropsTypes {
    extraObject: any
    closeModal: any
}
function ConfirmationModalBody({ extraObject, closeModal}:ConfirmationPropsTypes){

    const dispatch = useDispatch()

    const { message, type, _id, index} = extraObject

    const deleteBranch = async({id}:any) => {

    }

    const deleteShipment = async({id}:any) => {

    }

    const deleteUser = async({id}:any) => {
      console.log("the user to be deleted id is => ", id)
      console.log(baseUrl+'users/2')
      const response = await axios.delete(`${baseUrl}users/2`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }




    const proceedWithYes = async() => {
        if(type === CONFIRMATION_MODAL_CLOSE_TYPES.BRANCH_DELETE){
            // positive response, call api or dispatch redux function
            deleteBranch({index})
            dispatch(showNotification({message : "Branch Deleted!", status : 1}))
        }
        if(type === CONFIRMATION_MODAL_CLOSE_TYPES.DRIVER_DELETE){
            // positive response, call api or dispatch redux function
            deleteUser({index})
            dispatch(showNotification({message : "Driver Deleted!", status : 1}))
        }
        if(type === CONFIRMATION_MODAL_CLOSE_TYPES.SHIPMENT_DELETE){
            // positive response, call api or dispatch redux function
            deleteShipment({index})
            dispatch(showNotification({message : "Shipment Deleted!", status : 1}))
        }
        closeModal()
    }

    return(
        <> 
        <p className=' text-xl mt-8 text-center text-base-content'>
            {message}
        </p>

        <div className="modal-action mt-12">
                
                <button className="btn btn-outline btn-danger  text-red " onClick={() => closeModal()}>Cancel</button>

                <button className="btn bg-teal-500 text-white w-36" onClick={() => proceedWithYes()}>Yes</button> 

        </div>
        </>
    )
}

export default ConfirmationModalBody