/* eslint-disable react/prop-types */



const AddressCard = ({address}) => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">{address?.firstName+ " "+address?.lastName}</p>
        <p>{address?.streetAddress} , {address?.state} , {address?.city} , {address?.zipCode}</p>
        <div className="space-y-1">
            <p className="font-semibold">Phone Number :</p>
            <p>{address?.phoneNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
