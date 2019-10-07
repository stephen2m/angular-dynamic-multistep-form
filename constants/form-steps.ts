const COUNTRY_LIST = [
  { name: "Kenya", code: "KE" },
  { name: "Nigeria", code: "NGN" },
  { name: "Tanzania", code: "TZ" }
];

const TITLE_OPTIONS = [
  { name: "Dr", value: "DR" },
  { name: "Professor", value: "PROFESSOR" },
  { name: "Chief", value: "CHIEF" },
  { name: "None of the Above", value: "UNKNOWN" }
];

const STEP_1 = {
  title: {
    type: "select",
    options: TITLE_OPTIONS,
    validations: {
      required: true
    },
    errors: {
      required: "This field is required"
    },
    placeholder: "Title"
  },
  firstName: {
    type: "text",
    validations: {
      required: true
    },
    errors: {
      required: "This field is required"
    },
    placeholder: "First Name"
  },
  middleName: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Middle Name"
  },
  lastName: {
    type: "text",
    validations: {
      required: true
    },
    errors: {
      required: "This field is required"
    },
    placeholder: "Last Name"
  },
  dateOfBirth: {
    type: "date",
    validations: {
      required: true
    },
    errors: {
      required: "This field is required"
    },
    placeholder: "Date of Birth"
  }
};

const STEP_2 = {
  address: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Full Address"
  },
  country: {
    type: "select",
    options: COUNTRY_LIST,
    validations: {
      required: true
    },
    errors: {},
    placeholder: "Country"
  }
};

const STEP_3 = {
  phone: {
    type: "phone",
    validations: {
      pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,
      required: true
    },
    errors: {
      pattern: "Please enter a valid phone number",
      required: "This field is required"
    },
    placeholder: "Contact Number"
  },
  email: {
    type: "email",
    validations: {
      required: true,
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    },
    errors: {
      required: "This field is required",
      pattern: "Please enter a valid email address"
    },
    placeholder: "Email Address"
  }
};

const STEPS = [
  { label: "Step 1", data: STEP_1 },
  { label: "Step 2", data: STEP_2 },
  { label: "Step 3", data: STEP_3 },
  { label: "Review and Submit", data: {} },
  { label: "Form Review Done", data: {} }
];

export { STEPS };
