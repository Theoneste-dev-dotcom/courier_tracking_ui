import InputText from '@/components/Input/InputText';
import ErrorText from '@/components/Typography/ErrorText';
import React, { useState } from 'react'
import { Shipment } from '../shipments_slice';

const InternalPage = () => {
   const  [shipment, setShipment] = useState<Shipment>()

  const updateFormValue = ({updateType, value}:any) => {
    setShipment({...shipment, [updateType] : value})
}

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add New Shipment</h2>

      {/* Sender Details */}
      <div className="border p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-lg mb-2">Sender Details</h3>
        <InputText type="text" updateType="sender_name" containerStyle="mt-2" labelTitle="Name" updateFormValue={updateFormValue} defaultValue={''} />
        <InputText type="email" updateType="sender_email" containerStyle="mt-2" labelTitle="Email" updateFormValue={updateFormValue} defaultValue={''} />
        <InputText type="text" updateType="sender_address" containerStyle="mt-2" labelTitle="Address (Place Name)" updateFormValue={updateFormValue} defaultValue={''} />
        <InputText type="text" updateType="sender_phone" containerStyle="mt-2" labelTitle="Phone Number" updateFormValue={updateFormValue} defaultValue={''} />
      </div>

      {/* Receiver Details */}
      <div className="border p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-lg mb-2">Receiver Details</h3>
        <InputText defaultValue={''} type="text" updateType="receiver_name" containerStyle="mt-2" labelTitle="Name" updateFormValue={updateFormValue} />
        <InputText defaultValue={''} type="email" updateType="receiver_email" containerStyle="mt-2" labelTitle="Email" updateFormValue={updateFormValue} />
        <InputText defaultValue={''} type="text" updateType="receiver_address" containerStyle="mt-2" labelTitle="Address (Place Name)" updateFormValue={updateFormValue} />
        <InputText defaultValue={''} type="text" updateType="receiver_phone" containerStyle="mt-2" labelTitle="Phone Number" updateFormValue={updateFormValue} />
      </div>

      {/* Shipment Information */}
      <div className="border p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-lg mb-2">Shipment Information</h3>
        <InputText defaultValue={''} type="text" updateType="shipment_name" containerStyle="mt-2" labelTitle="Shipment Name" updateFormValue={updateFormValue} />
        <InputText defaultValue={''} type="text" updateType="origin_place_name" containerStyle="mt-2" labelTitle="Origin Place Name" updateFormValue={updateFormValue} />
        <InputText defaultValue={''} type="text" updateType="destination_place_name" containerStyle="mt-2" labelTitle="Destination Place Name" updateFormValue={updateFormValue} />
      </div>

      <button className=''>Save </button>
      {/* Action Buttons */}
      {/* <ErrorText styleClass="mt-4">Error Message</ErrorText>
      <div className="modal-action mt-4">
        <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
        <button className="btn btn-primary px-6" onClick={() => saveNewShipment()}>Save</button>
      </div> */}
    </div>
  );
};

export default InternalPage;
