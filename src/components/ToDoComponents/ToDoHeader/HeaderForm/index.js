import React from "react";
import { Formik, Form, Field } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../../contexts/ToDoContext";

const HeaderForm = (props) => {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        addTodo(values.text);
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
