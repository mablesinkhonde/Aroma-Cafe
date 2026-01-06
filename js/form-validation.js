// Form Validation
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  // Real-time validation
  const inputs = contactForm.querySelectorAll("input[required], textarea[required]")

  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input)
    })

    input.addEventListener("input", () => {
      if (input.classList.contains("error")) {
        validateField(input)
      }
    })
  })

  // Form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let isValid = true
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false
      }
    })

    if (isValid) {
      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      }

      // Simulate form submission
      console.log("[v0] Form submitted with data:", formData)

      // Show success message
      const successMessage = document.querySelector(".form-success")
      if (successMessage) {
        successMessage.textContent = "Thank you for your message! We'll get back to you soon."
        successMessage.classList.add("show")
      }

      // Reset form
      contactForm.reset()

      // Clear success message after 5 seconds
      setTimeout(() => {
        if (successMessage) {
          successMessage.classList.remove("show")
        }
      }, 5000)
    }
  })
}

function validateField(field) {
  const errorMessage = field.parentElement.querySelector(".error-message")
  let isValid = true
  let message = ""

  // Check if field is empty
  if (field.hasAttribute("required") && !field.value.trim()) {
    isValid = false
    message = "This field is required"
  }

  // Email validation
  if (field.type === "email" && field.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(field.value)) {
      isValid = false
      message = "Please enter a valid email address"
    }
  }

  // Phone validation (optional but if filled, should be valid)
  if (field.type === "tel" && field.value.trim()) {
    const phoneRegex = /^[\d\s\-+$$$$]+$/
    if (!phoneRegex.test(field.value) || field.value.length < 10) {
      isValid = false
      message = "Please enter a valid phone number"
    }
  }

  // Update UI
  if (!isValid) {
    field.classList.add("error")
    if (errorMessage) {
      errorMessage.textContent = message
    }
  } else {
    field.classList.remove("error")
    if (errorMessage) {
      errorMessage.textContent = ""
    }
  }

  return isValid
}
