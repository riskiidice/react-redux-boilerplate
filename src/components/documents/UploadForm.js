import React from 'react'
import { Link } from 'react-router-dom';

const UploadForm = () => {
  return (
      <div className="content-wrapper">
            <div className="col-md-8 col-md-offset-2">
            <section className="content-header">
                <br />
              <ol className="breadcrumb">
                <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                <li className="active">Upload</li>
              </ol>
            </section>

            <section className="content">
                  <div className="box box-primary">
                    <div className="box-header with-border">
                      <h3 className="box-title">ฟอร์มเพิ่มเอกสารใหม่</h3>
                    </div>
                    <form role="form">
                      <div className="box-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">ชื่อเอกสาร</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="กรอกชื่อเอกสาร" />
                        </div>
                      <div className="form-group">
                        <label>หน่วยงาน</label>
                        <select className="form-control select2" >
                          <option selected="selected">กรุณาเลือกหน่วยงาน</option>
                          <option>ฝสค.</option>
                          <option>กอบ.</option>
                          <option>กบข.</option>
                          <option>กบอ.</option>
                        </select>
                      </div>
                    {/* <div v-if="documentForm.tags !==''" className="form-group">
                        <div v-htmlFor="(tag, index) in documentForm.tags" :key="index" className="field">
                            <small style="margin-left:5px" className="label pull-left bg-yellow">{{ tag }} <i className="fa fa-remove " @click="deleteTag(tag)"></i> </small>
                        </div>
                      </div> */}
                    <br/>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">คำสำคัญเอกสาร</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="เช่น เอกสารตรวจรับ" />
                        <p className="help-block text-red"><span id="noteForTab">หมายเหตุ</span> สามารถเพิ่มได้หลายคำโดยการกด Tab</p>
                    </div>
                        <div className="form-group upload-form">
                          <label htmlFor="exampleInputFile">ไฟล์เอกสารแนบ (ลากไฟล์มาวาง หรือ คลิกเลือก)</label>
                          <input type="file" id="exampleInputFile" multiple accept="image/*" />
                        </div>
                        {/* <div v-if="documentForm.files"  className="form-group">
                          <div v-htmlFor="(file, index) in documentForm.files" :key="index" className="field">
                            <small style="margin-left:5px" className="label pull-left bg-primary">{{ file.name }} <i className="fa fa-remove " @click="deleteFile(file)"></i> </small>
                            </div>
                            <br>
                        </div> */}
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">ชื่อผู้อัพโหลด</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="นาย ABC" disabled />
                        </div>

                      <div className="box-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                      </div>
                    </form>
                    </div>
               </section>
              </div>
       </div>
    )
}

export default UploadForm
