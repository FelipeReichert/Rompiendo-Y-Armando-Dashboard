<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Table</strong> <small>Basic example</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Using the most basic table CoreUI, here&#39;s how
            <code>&lt;CTable&gt;</code>-based tables look in CoreUI.
          </p>
          <DocsExample href="components/table.html">
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>


<script>
export default {
  name: 'Tables',
}
</script>

