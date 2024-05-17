import React, { useContext, useEffect } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import MainContext from '../../../context/context'

const Add = () => {
    const { setData, data } = useContext(MainContext)

    return (
        <>
            <Formik
                initialValues={{ title: '', ingredients: '', price: '', image: '', category: '' }}
                validate={values => { }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://localhost:8080/api/products', { ...values })
                        .then(res => {
                            setData([...data, res.data])
                        })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <input
                            type="text"
                            placeholder="ingredients"
                            name="ingredients"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ingredients}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="category"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.category}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Add
