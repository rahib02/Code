import React from 'react'
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from 'formik';
import './Body.css'
function Body() {
    const [arr, setarr] = useState([]);
    console.log(arr);
  return (
    <div className='body'>
        <h2>Sizə zəng edək</h2>
        <p>Operator ilə danışaraq siz akademiya və tədris proqramları haqqında ilkin məlumatları əldə edə və digər suallarınızı ünvanlaya bilərsiniz.</p>
        <div style={{display:'flex'}}>
                    <div className='bodyimg'>
            <img src="https://code.edu.az/wp-content/uploads/2021/10/kod-akademiya-muraciet-et.jpeg" alt="" />
        </div>
        <div>
            <Formik
        initialValues={{
          name: "",
          lastname: "",
          operatorcode:"",
          phone:"",
          work:"",
          about: "",
        }}
        onSubmit={(values) => {
          if (!values.name) {
            alert("The name part is empty");
            return;
          } else if (!values.lastname) {
            alert("The lastname part is empty");
            return;
          } else if (!values.operatorcode) {
            alert("The operator code part is empty");
            return;
          }  else if (!values.phone) {
            alert("The phone number part is empty");
            return;
          }else if (!values.work) {
            alert("The work part is empty");
            return;
          }
          else if (!values.about) {
            alert("The about part is empty");
            return;
          }
           else {
            const update =[{
              name : values.name,
              lastname : values.lastname,
              phone : values.operatorcode+values.phone,
              work : values.work,
              about : values.about,

              
           }]
            setarr([...arr, update]);
          }
          
        }}
      >
        {(values) => (
          <Form className='form'>
            <div id='forms'>
                <Field id='name' name="name" placeholder="Ad" />
            <Field id='lastname' name="lastname" placeholder="Soyad" />
            </div>
            <div id='forms'>
                <Field id='long' component="select" name='operatorcode' >
                <option value="050">050</option>
                <option value="051">051</option>
                <option value="055">055</option>
                <option value="070">070</option>
                <option value="077">077</option>
                <option value="099">099</option>
            </Field>
            <Field name="phone" type='number' placeholder="XXX XX XX" id="longs"></Field>
            </div>
            <div id='forms'>
                <Field  id='kiber' component="select" name='work' >
                <option value="Kiber Təhlükəsizlik">Kiber Təhlükəsizlik</option>
                <option value="UX/UI Dizayn">UX/UI Dizayn</option>
                <option value="2D Motion Dizayn">2D Motion Dizayn</option>
                <option value="Full Stack Proqramlaşdırma">Full Stack Proqramlaşdırma</option>
                <option value="Qrafik və Veb Dizayn">Qrafik və Veb Dizayn</option>
                <option value="Digital Marketing Professional - DMI Pro">Digital Marketing Professional - DMI Pro</option>
                <option value="Digital Memarlıq və 3D">Digital Memarlıq və 3D</option>
                
            </Field>
            </div>
            <div>
                <Field id='message' name="about"  placeholder="Elave qeyd" />
            </div>
            <button id='btn' type="submit">Gonder</button>
          </Form>
        )}
      </Formik>
        </div>
        </div>
    </div>
        
  )
}

export default Body