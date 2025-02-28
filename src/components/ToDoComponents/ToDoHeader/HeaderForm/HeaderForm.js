import React from "react";
import { Formik, Form, Field } from "formik";
import validationSchema from "./validations";

const HeaderForm = (props) => {
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field id="text" name="text" className="new-todo" placeholder="What needs to be done?" autoFocus />
      </Form>
    </Formik>
  );
};

export default HeaderForm;
