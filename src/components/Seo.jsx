import React from 'react'

export const Seo = ({ title, description, children }) => {
  const seo = {
    title: title || 'CPDUnlimited',
    description: description || '',
  }

  return (
    <>
      <title>
        {seo.title ||
          'CPD Unlimited - Gear up for the best learning experience. No. 1 CPD Online'}
      </title>
      <meta name='description' content={seo.description} />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='description'
        content='No. 1 online platform for Continuous Professional Development (CPD)'
      />
      <meta
        name='keywords'
        content='cpd unlimited, cpdunlimited, cdpunlimited, cpd in ghana, cpd in africa, cpd online, cpd courses, online cpd, cpd for doctors, cpd for nurses, cpd for pharmacist, cpd for midwives, cpd for physician assistant, cpd for lab technicians, pharmacy council, medical and dental council'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      {children}
    </>
  )
}
