// 'use client'
// import React, { useState } from 'react'
// import styles from './ContactForm.module.css'

// const initialState = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   interest: '',
//   message: '',
// }

// function ContactForm() {
//   const [formData, setFormData] = useState(initialState)
//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [success, setSuccess] = useState(false)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//     setErrors(prev => ({ ...prev, [name]: '' }))
//   }

//   const validate = () => {
//     const newErrors = {}

//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'

//     if (!formData.email) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Enter a valid email'
//     }

//     if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
//     if (!formData.interest) newErrors.interest = 'Please select an option'
//     if (!formData.message.trim()) newErrors.message = 'Message is required'

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validate()) return

//     setIsSubmitting(true)

//     try {
      
//       await new Promise(res => setTimeout(res, 1200))

//       setSuccess(true)
//       setFormData(initialState)
//     } catch (err) {
//       alert('Something went wrong. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.container}>
        
//         <div className={styles.left}>
//           <h2 className={styles.title}>Get in <span>Touch</span></h2>
//           <p className={styles.description}>
//             We’d love to understand your goals, challenges, and how ARCA AI can support your clinical, operational, or community health needs.
//           </p>
//           <p className={`${styles.highlight} ${styles.description}`}>
//             Share a few details below, and our team will reach out within 48 hours.
//           </p>
//         </div>

//         <form className={styles.form} onSubmit={handleSubmit} noValidate>

//           <div className={styles.row}>
//             <div className={styles.field}>
//               <label>First Name *</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//               {errors.firstName && <span>{errors.firstName}</span>}
//             </div>

//             <div className={styles.field}>
//               <label>Last Name *</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//               {errors.lastName && <span>{errors.lastName}</span>}
//             </div>
//           </div>

//           <div className={styles.row}>
//             <div className={styles.field}>
//               <label>Email *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <span>{errors.email}</span>}
//             </div>

//             <div className={styles.field}>
//               <label>Phone *</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && <span>{errors.phone}</span>}
//             </div>
//           </div>

//           <div className={styles.field}>
//             <label>Area Of Interest *</label>
//             <select
//               name="interest"
//               value={formData.interest}
//               onChange={handleChange}
//             >
//               <option value="">Select Area Of Interest</option>
//               <option value="providers">Providers</option>
//               <option value="payers">Payers</option>
//               <option value="pharma">Pharma</option>
//               <option value="community">Community Health</option>
//               <option value="partnerships">Partnerships</option>
//             </select>
//             {errors.interest && <span>{errors.interest}</span>}
//           </div>

//           <div className={styles.field}>
//             <label>Message *</label>
//             <textarea
//               rows="4"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//             {errors.message && <span>{errors.message}</span>}
//           </div>

//           <button
//             type="submit"
//             className={styles.submitBtn}
//             disabled={isSubmitting}
//             >
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>


//           {success && (
//             <p className={styles.success}>
//               Thank you! We’ll be in touch shortly.
//             </p>
//           )}
//         </form>

//       </div>
//     </section>
//   )
// }

// export default ContactForm


'use client'
import React, { useState } from 'react'
import styles from './ContactForm.module.css'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

function ContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s()]{7,}$/;

  const validate = () => {
    const newErrors = {};

    const trimmed = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (!trimmed.firstName) newErrors.firstName = 'First name is required';
    if (!trimmed.lastName) newErrors.lastName = 'Last name is required';

    if (!trimmed.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(trimmed.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!trimmed.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(trimmed.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select an option';
    }

    if (!trimmed.message) {
      newErrors.message = 'Message is required';
    } else if (trimmed.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    try {
      // 🔗 later: replace with API route / server action
      await new Promise(res => setTimeout(res, 1200))

      setSuccess(true)
      setFormData(initialState)
    } catch (err) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h2 className={styles.title}>Get in <span>Touch</span></h2>
          <p className={styles.description}>
            We’d love to understand your goals, challenges, and how ARCA AI can support your clinical, operational, or community health needs.
          </p>
          <p className={`${styles.highlight} ${styles.description}`}>
            Share a few details below, and our team will reach out within 48 hours.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span>{errors.firstName}</span>}
            </div>

            <div className={styles.field}>
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span>{errors.lastName}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label>Area Of Interest *</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">Select Area Of Interest</option>
              <option value="providers">Providers</option>
              <option value="payers">Payers</option>
              <option value="pharma">Pharma</option>
              <option value="community">Community Health</option>
              <option value="partnerships">Partnerships</option>
            </select>
            {errors.interest && <span>{errors.interest}</span>}
          </div>

          <div className={styles.field}>
            <label>Message *</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span>{errors.message}</span>}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
            >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {submitError && (
            <p className={styles.error}>{submitError}</p>
          )}

          {success && (
            <p className={styles.success}>
              Thank you! We’ll be in touch shortly.
            </p>
          )}
        </form>

      </div>
    </section>
  )
}

export default ContactForm
