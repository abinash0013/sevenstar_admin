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

const About = () => { 
  const [itemValue, setItemValue] = useState('')
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [aboutData, setAboutData] = useState([])
  const [visible, setVisible] = useState(false)
  const [aboutId, setAboutId] = useState('') 
  const [aboutMessage, setAboutMessage] = useState('') 
  const [whatsappNumber, setWhatsappNumber] = useState('')

  useEffect(() => {
    about_list()
  }, [])

  const about_list = async () => {
    let result = await getApiCall(base.aboutList) 
    if(result.length > 0){
      setAboutData(result)
    }
  }

  const get_edit_value = async (item) => { 
    setEditModalVisible(true)
    setAboutId(item.about_id) 
    setAboutMessage(item.about_message) 
    setWhatsappNumber(item.whatsappNumber)
  }

  const edit_about = async () => {     
    if (aboutMessage == '') {
      toast.error('Disclaimer Message is Mandatory')
    } else {
      let req = {
        aboutId: aboutId, 
        aboutMessage: aboutMessage, 
        whatsappNumber: whatsappNumber
      }
      console.log('reqreq', req)
      let result = await putApiCall(base.editAbout, req)
      console.log('resultresult', result)
      if (result.code == 200) {
        setEditModalVisible(false)
        about_list()
        toast.success('Updated Successfully..!')
      }
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
                  <CTableHeaderCell scope="col">About Us</CTableHeaderCell> 
                  <CTableHeaderCell scope="col">WhatsApp Number</CTableHeaderCell> 
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {aboutData?.map((item, index) => {
                  console.log('agentlistitemmmm', item)
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{item.about_message}</CTableDataCell>
                      <CTableDataCell>{item.whatsappNumber}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          color="warning"
                          className="me-2"
                          onClick={() => {
                            get_edit_value(item)
                          }}
                        >
                          Edit
                        </CButton>
                        <CModal alignment="center" visible={editModalVisible}>
                          <CModalHeader>
                            <CModalTitle>Edit</CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            <CForm>
                              <div className="mb-3"> 
                                <CFormLabel htmlFor="email">About</CFormLabel>
                                <CFormInput
                                  type="text"
                                  id="aboutMessage"
                                  placeholder="Disclaimer Message"
                                  onChange={(e) => {
                                    setAboutMessage(e.target.value)
                                  }}
                                  defaultValue={aboutMessage}
                                /> 
                                <CFormInput
                                  type="text"
                                  id="whatsappNumber"
                                  placeholder="Whatsapp Number"
                                  className='mt-2'
                                  onChange={(e) => {
                                    setWhatsappNumber(e.target.value)
                                  }}
                                  defaultValue={whatsappNumber}
                                /> 
                              </div>
                            </CForm>
                          </CModalBody>
                          <CModalFooter>
                            <CButton color="secondary" onClick={() => setEditModalVisible(false)}>
                              Cancel
                            </CButton>
                            <CButton color="primary" onClick={() => edit_about()}>
                              Update.
                            </CButton>
                          </CModalFooter>
                        </CModal>
                      </CTableDataCell>
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

export default About
