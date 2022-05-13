import React from 'react'

export default function PersonalInf({ personalInf }: any) {
    return (
        <section className=' flex gap-20 mb-20'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9EaIvkZnbOohrXaL7OFyCMXx_PT61ITv8_bhu5bn_pE7roLfL_ek8d818mpxsq1E1I8&usqp=CAU" alt="" className=' rounded-full object-cover w-52 h-52' />
            <div>
                <h3 className=' text-xl font-medium mb-2'>{personalInf.personalInformation.name}</h3>
                <p className=' text-gray-400'>{personalInf.idUser?.email}</p>
                <p className=' text-gray-400'>{personalInf.personalInformation.phoneNumber}</p>
                <p className=' text-gray-400'>{personalInf.personalInformation.country}</p>
            </div>
        </section>
    )
}
