import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { getApiCall, postApiCall, putApiCall } from 'src/services/AppSetting'
import { base } from 'src/constants/Data.constant'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Feedback = () => { 
  const [feedbackData, setFeedbackData] = useState([]) 

  useEffect(() => {
    feedback_list()
  }, [])

  const feedback_list = async () => {
    let result = await getApiCall(base.feedbackList)
    console.log('resultresultresult', result)
    if(result.length > 0){
      setFeedbackData(result)
    }
  } 

  return (
    <CRow>
      <CCol xs={12} className="mb-4">
        <ToastContainer /> 
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell> 
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell> 
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell> 
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell> 
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {feedbackData.map((item, index) => { 
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.username}</CTableDataCell>
                      <CTableDataCell>{item.email}</CTableDataCell>
                      <CTableDataCell>{item.description}</CTableDataCell> 
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Feedback
