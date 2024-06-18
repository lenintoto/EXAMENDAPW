const reportModel = {

    async getAllReportsModel() {
        const peticion = await fetch ('http://localhost:4000/reports')
        const report = await peticion.json()
        return report
    },

    async createReportModel(newreport){
        const url = 'http://localhost:4000/reports'
        const peticion = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newreport),
            headers:{'Content-Type':'application/json'}
        })
        const data = await peticion.json()
        return data

    },

    async getReportByIDModel(reportId){
        const peticion = await fetch(`http://localhost:4000/reports/${reportId}`)
        if(!peticion.ok){
            return {error:"Reporte no encontrado"}
        }
        const report = await peticion.json()

        return report
    },
    async updateReportModel (reportId,dataReport){
        const url = `http://localhost:4000/reports/${reportId}`
        const peticion = await fetch(url, {
            method:'PUT',                              //verbo que uso
            body:JSON.stringify(dataReport),               //informacion que voy a mandar
            headers:{'content-Type':'application/json'} //tipo de contenido
        })
        const data = await peticion.json()
        //: punto 2
        return data
    },
    async deleteReportModel (reportId){
        //: punto 1
        const url = `http://localhost:4000/tours/${reportId}`
        const peticion = await fetch(url, {
            method:'DELETE'      
        })
        await peticion.json()
        //: punto 2
        return {msg:"Reporte eliminado correctamente"}
    }

}

export default reportModel