import React, { useEffect, useState } from "react";

const REPEATED_CLASSNAMES = [
  "jost text-[1.688rem] leading-[1.48] mb-[1.875rem] mt-[3.3125rem] lg:mb-[2.1875rem] lg:mt-[5.125rem]",
  "relative mb-[1.875rem]",
  "relative flex text-[1.219rem] rounded-none border-[none] h-14 whitespace-nowrap p-0 text-[hsla(300,6%,94%,.89)] items-center appearance-none bg-none outline-[none] [transition:border-color_.4s_ease-in-out] w-full cursor-select-hover bg-transparent",
  "jost text-[2.344rem] tracking-[-.01625rem] leading-none mb-[3.4375rem]",
  "block relative",
  "absolute -left-[624.9375rem]",
  "relative block overflow-hidden rounded-[4.375rem] cursor-select-hover",
  "relative flex rounded-[4.375rem] border-[0.125rem] border-[solid] border-[hsla(0,0%,100%,.06)] bg-[#191920] h-[6.375rem] px-[2.344rem] py-[1.406rem] items-center cursor-pointer overflow-hidden",
  "grid gap-[1.125rem_2.344rem] [@media(min-width:960px)]:grid-cols-[repeat(auto-fit,minmax(19.375rem,1fr))] text-[1.406rem] relative lg:text-[1.313rem]",
  "[transition:transform_.2s_ease-in-out]",
];

interface FormData {
  projectType: string[];
  existingBrand: string;
  projectBudget: string;
  brief: File | null;
  firstName: string;
  lastName: string;
  companyName: string;
  existingWebsite: string;
  email: string;
  telephone: string;
  message: string;
  hearAboutUs: string;
}

const initialFormData: FormData = {
  projectType: ["Branding"],
  existingBrand: "Yes",
  projectBudget: "£20,000 - £44,999",
  brief: null,
  firstName: "",
  lastName: "",
  companyName: "",
  existingWebsite: "",
  email: "",
  telephone: "",
  message: "",
  hearAboutUs: "",
};

interface FormErrors {
  projectType?: string;
  existingBrand?: string;
  projectBudget?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  telephone?: string;
}

function ProjectSection({
  isVisible,
  setIsVisible,
  isExit,
  setIsExit,
  isEnter,
  setIsEnter,
}: any) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isExit) {
      setIsEnter(false);
      const firstTimer = setTimeout(() => {
        setIsVisible(false);
        // console.log("Invisible after Exit");
      }, 500);
      const secondTimer = setTimeout(() => {
        setIsVisible(true);
        setIsExit(false);
        // console.log("Visible after reset");
      }, 550); // Adjust this to match your exit animation duration

      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
      };
    } else if (isEnter) {
      setIsVisible(true);
      setIsExit(false);
    }
    // console.log("Enter: " + isEnter);
    // console.log("Exit: " + isExit);
    // console.log("Visible: " + isVisible);
  }, [isEnter, isExit, isVisible]);

  const validateInitialFields = (formData: FormData): FormErrors => {
    let errors: FormErrors = {};

    if (formData.projectType.length === 0) {
      errors.projectType = "Please select at least one project type";
    }
    if (!formData.existingBrand) {
      errors.existingBrand = "Please specify if you have an existing brand";
    }
    if (!formData.projectBudget) {
      errors.projectBudget = "Please select a project budget";
    }

    return errors;
  };

  useEffect(() => {
    const validationErrors = validateInitialFields(formData);
    setErrors(validationErrors);
  }, [formData]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData((prevState) => ({
      ...prevState,
      brief: file,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData.projectType, value]
            : prevData.projectType.filter((item) => item !== value)
          : value,
    }));
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option: string) => {
    setFormData((prevData) => ({
      ...prevData,
      hearAboutUs: option,
    }));
    setIsDropdownOpen(false);
  };

  const validateForm = (formData: FormData): FormErrors => {
    let errors: FormErrors = {};

    if (formData.projectType.length === 0) {
      errors.projectType = "Please select at least one project type";
    }
    if (!formData.existingBrand) {
      errors.existingBrand = "Please specify if you have an existing brand";
    }
    if (!formData.projectBudget) {
      errors.projectBudget = "Please select a project budget";
    }
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.telephone.trim()) {
      errors.telephone = "Telephone is required";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission started");

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      console.log("Form is not valid, submission cancelled");
      console.log("Validation errors:", validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitResult("");

    try {
      console.log("Sending form data:", formData);
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const result = await response.json();
      console.log("Submission result:", result);

      setSubmitResult(result.message);
      setFormData(initialFormData);
      setIsFormValid(false);
    } catch (error) {
      console.error("Error details:", error);
      setSubmitResult("Failed to submit project inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("Form submission ended");
    }
  };

  const isSelected = formData.brief !== null;
  const fileName = isSelected
    ? formData.brief?.name || "File selected"
    : "Upload a brief";

  return (
    <section
      className={`fixed top-0 w-full h-full bg-[#0E0F11] text-[#f0eef0] overflow-auto px-[2.344rem] py-[1.406rem] lg:px-[2.8125rem] lg:py-[0] enter-done z-[999] [transition:transform_.5s_ease-in-out] 
        ${
          isExit
            ? "!translate-x-[-100vw]"
            : isEnter
            ? "!translate-x-0"
            : "!translate-x-[100vw]"
        }
        ${isVisible ? "" : "hidden"}`}
      data-lenis-prevent="true"
    >
      <div className="josefin-sans [@media(min-width:960px)]:flex [@media(min-width:960px)]:h-full [@media(min-width:960px)]:overflow-auto [@media(min-width:960px)]:px-10 [@media(min-width:960px)]:py-[3.75rem] [@media(min-width:960px)]:-mx-[2.5rem] [@media(min-width:960px)]:my-[0] [@media(min-width:960px)]:justify-between">
        <div className="[@media(min-width:960px)]:flex-[0_0_60.938rem]">
          <button
            className="group cursor-select-hover inline-flex text-[1.219rem] text-[#fff] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer relative flex px-[2.063rem] py-[0] bg-none border-[0.125rem] border-[solid] border-[hsla(0,0%,85%,.19)] leading-[1.2] rounded-[1.875rem] items-center h-[2.8125rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color]"
            onClick={() => {
              setIsExit(true);
            }}
          >
            <span
              className="relative overflow-hidden"
              data-title="‹ Back to previous"
            >
              <span className="block [transition:.2s_ease-in-out] [transition-property:transform]">
                <span className="relative flex flex-col overflow-hidden">
                  <span
                    className={`group-hover:-translate-y-[1.4875rem] ${REPEATED_CLASSNAMES[9]}`}
                  >
                    ‹ Back to previous
                  </span>
                  <span
                    className={`absolute translate-y-[1.4875rem] group-hover:translate-y-[0] ${REPEATED_CLASSNAMES[9]}`}
                  >
                    ‹ Back to previous
                  </span>
                </span>
              </span>
            </span>
          </button>
          <h2 className="jost mt-[6.875rem] mb-[2.8125rem] text-[4.375rem] leading-[.9] tracking-[-.1125rem] uppercase font-normal lg:mt-[6.281rem] lg:mb-[7.219rem] lg:text-[8.438rem]">
            {isSubmitted ? "Thank you for your submission!" : "Start a Project"}
          </h2>
          <div
            className={`${
              isSubmitted ? "" : "hidden"
            } mt-[1.1875rem] text-[1.313rem] font-light leading-[1.6] tracking-[-.0175rem] mb-[6.375rem] max-w-xs`}
          >
            Thanks for your interest in working with us. Please complete your
            details and we&apos;ll get back to you within 48 hours.
          </div>
          {!isSubmitted && (
            <div>
              <form className="undefined pb-[3.75rem]" onSubmit={handleSubmit}>
                <h5 className={REPEATED_CLASSNAMES[3]}>About your project</h5>
                <h6 className={REPEATED_CLASSNAMES[0]}>
                  1. Project Type *
                  <span className="block mt-[.375rem] opacity-[.56] text-[1.125rem]">
                    (Select all applicable)
                  </span>
                </h6>
                <div className={REPEATED_CLASSNAMES[8]}>
                  {["Branding", "Website"].map((type) => (
                    <label key={type} className={REPEATED_CLASSNAMES[4]}>
                      <input
                        className={REPEATED_CLASSNAMES[5]}
                        type="checkbox"
                        name="projectType"
                        value={type}
                        checked={formData.projectType.includes(type)}
                        onChange={handleInputChange}
                      />
                      <span className={REPEATED_CLASSNAMES[6]}>
                        <span
                          className={`${
                            REPEATED_CLASSNAMES[7]
                          } content-[""] after:absolute after:top-[0] after:left-[0] after:bg-[#f0eef0] after:w-full after:h-full after:rounded-[4.375rem] after:origin-[0_0] after:[transition:transform_.4s_ease-in] after:mix-blend-difference ${
                            formData.projectType.includes(type)
                              ? "after:scale-x-100"
                              : "after:scale-x-0"
                          }`}
                        >
                          {type}
                        </span>
                      </span>
                      <i
                        className={`absolute top-2/4 left-[0] -translate-x-1/2 -translate-y-1/2 w-[1.6875rem] h-[1.6875rem] [background:url(/svgs/check.svg)_50%/contain_no-repeat] [transition:opacity_.6s_ease-in-out] ${
                          formData.projectType.includes(type) ? "" : "opacity-0"
                        }`}
                      ></i>
                    </label>
                  ))}
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.projectType ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.projectType}
                  </div>
                </div>

                <h6 className={REPEATED_CLASSNAMES[0]}>
                  2. Do you have an existing brand? *
                </h6>
                <div className={REPEATED_CLASSNAMES[8]}>
                  {["Yes", "No"].map((option) => (
                    <label key={option} className={REPEATED_CLASSNAMES[4]}>
                      <input
                        className={REPEATED_CLASSNAMES[5]}
                        type="radio"
                        name="existingBrand"
                        value={option}
                        checked={formData.existingBrand === option}
                        onChange={handleInputChange}
                      />
                      <span className={REPEATED_CLASSNAMES[6]}>
                        <span
                          className={`${
                            REPEATED_CLASSNAMES[7]
                          } content-[""] after:absolute after:top-[0] after:left-[0] after:bg-[#f0eef0] after:w-full after:h-full after:rounded-[4.375rem] after:origin-[0_0] after:[transition:transform_.4s_ease-in] after:mix-blend-difference ${
                            formData.existingBrand === option
                              ? "after:scale-x-100"
                              : "after:scale-x-0"
                          }`}
                        >
                          {option}
                        </span>
                      </span>
                      <i
                        className={`absolute top-2/4 left-[0] -translate-x-1/2 -translate-y-1/2 w-[1.6875rem] h-[1.6875rem] [background:url(/svgs/check.svg)_50%/contain_no-repeat] [transition:opacity_.6s_ease-in-out] ${
                          formData.existingBrand === option ? "" : "opacity-0"
                        }`}
                      ></i>
                    </label>
                  ))}
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.existingBrand ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.existingBrand}
                  </div>
                </div>

                <h6 className={REPEATED_CLASSNAMES[0]}>3. Project budget *</h6>
                <div
                  className={`${REPEATED_CLASSNAMES[8]} FormFields_inCol__XNeth`}
                >
                  {[
                    "£20,000 - £44,999",
                    "£45,000 - £69,999",
                    "£70,000 - £99,999",
                    "£100,000 +",
                  ].map((budget) => (
                    <label key={budget} className={REPEATED_CLASSNAMES[4]}>
                      <input
                        className={REPEATED_CLASSNAMES[5]}
                        type="radio"
                        name="projectBudget"
                        value={budget}
                        checked={formData.projectBudget === budget}
                        onChange={handleInputChange}
                      />
                      <span className={REPEATED_CLASSNAMES[6]}>
                        <span
                          className={`${
                            REPEATED_CLASSNAMES[7]
                          } content-[""] after:absolute after:top-[0] after:left-[0] after:bg-[#f0eef0] after:w-full after:h-full after:rounded-[4.375rem] after:origin-[0_0] after:[transition:transform_.4s_ease-in] after:mix-blend-difference ${
                            formData.projectBudget === budget
                              ? "after:scale-x-100"
                              : "after:scale-x-0"
                          }`}
                        >
                          {budget}
                        </span>
                      </span>
                      <i
                        className={`absolute top-2/4 left-[0] -translate-x-1/2 -translate-y-1/2 w-[1.6875rem] h-[1.6875rem] [background:url(/svgs/check.svg)_50%/contain_no-repeat] [transition:opacity_.6s_ease-in-out] ${
                          formData.projectBudget === budget ? "" : "opacity-0"
                        }`}
                      ></i>
                    </label>
                  ))}
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.projectBudget ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.projectBudget}
                  </div>
                </div>

                <h6 className={REPEATED_CLASSNAMES[0]}>
                  4. Do you have a project brief?
                </h6>
                <div className="mb-[1.875rem]  ">
                  <label>
                    <input
                      className={REPEATED_CLASSNAMES[5]}
                      type="file"
                      onChange={handleFileChange}
                      accept="application/pdf"
                      name="brief"
                    />
                    <span className="cursor-select-hover relative flex text-[1.219rem] rounded-none border-[none] [border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)] h-14 whitespace-nowrap p-0 text-[hsla(300,6%,94%,.89)] items-center appearance-none bg-none outline-[none] [transition:border-color_.4s_ease-in-out] w-full pr-10">
                      {fileName}
                      <svg
                        className="absolute top-2/4 right-[0] w-[1.9375rem] -translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 32 32"
                      >
                        <circle
                          className={`[transition:.4s_ease-in-out] [transition-property:opacity,fill] ${
                            isSelected
                              ? "fill-[#4ae095] opacity-100"
                              : "opacity-[.1]"
                          }`}
                          cx="15.949"
                          cy="16.213"
                          r="15.75"
                          fill="#D9D9D9"
                        ></circle>
                        <path
                          className="[transition:fill_.4s_ease-in-out]"
                          fill="#D9D9D9"
                          fill-rule="evenodd"
                          d="M15.947 8.83c.164 0 .328.062.452.187l2.873 2.872a.638.638 0 11-.903.903l-1.784-1.784v6.758a.638.638 0 01-1.277 0v-6.755l-1.78 1.781a.638.638 0 01-.904-.903l2.848-2.847a.636.636 0 01.475-.212zm5.747 5.745c.352 0 .638.285.638.638v5.744a.638.638 0 01-.638.639h-11.49a.638.638 0 01-.638-.639v-5.742a.638.638 0 011.277 0v5.104h10.212v-5.106c0-.353.286-.638.639-.638z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <h5
                  className={`${REPEATED_CLASSNAMES[3]} mt-[10.313rem] mb-[5.156rem]`}
                >
                  About you
                </h5>
                <h6 className={REPEATED_CLASSNAMES[0]}>
                  5. What should we call you?
                </h6>
                <div
                  className={`${REPEATED_CLASSNAMES[1]} ${
                    errors.firstName
                      ? "[border-bottom:.0625rem_solid_#ff3636]"
                      : "[border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]"
                  }`}
                >
                  <input
                    className={REPEATED_CLASSNAMES[2]}
                    type="text"
                    placeholder="First name *"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.firstName ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.firstName}
                  </div>
                </div>
                <div
                  className={`${REPEATED_CLASSNAMES[1]} ${
                    errors.lastName
                      ? "[border-bottom:.0625rem_solid_#ff3636]"
                      : "[border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]"
                  }`}
                >
                  <input
                    className={REPEATED_CLASSNAMES[2]}
                    type="text"
                    placeholder="Last name *"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.lastName ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.lastName}
                  </div>
                </div>
                <h6 className={REPEATED_CLASSNAMES[0]}>
                  6. About your company?
                </h6>
                <div
                  className={`${REPEATED_CLASSNAMES[1]} ${
                    errors.companyName
                      ? "[border-bottom:.0625rem_solid_#ff3636]"
                      : "[border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]"
                  }`}
                >
                  <input
                    className={REPEATED_CLASSNAMES[2]}
                    type="text"
                    placeholder="Company name *"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.companyName ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.companyName}
                  </div>
                </div>
                <div
                  className={`${REPEATED_CLASSNAMES[1]} [border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]`}
                >
                  <input
                    className={REPEATED_CLASSNAMES[2]}
                    type="text"
                    placeholder="Existing website (optional)"
                    name="existingWebsite"
                    value={formData.existingWebsite}
                    onChange={handleInputChange}
                  />
                </div>
                <h6 className={REPEATED_CLASSNAMES[0]}>7. Contact details</h6>
                <div
                  className={`${REPEATED_CLASSNAMES[1]} ${
                    errors.email
                      ? "[border-bottom:.0625rem_solid_#ff3636]"
                      : "[border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]"
                  }`}
                >
                  <input
                    className={REPEATED_CLASSNAMES[2]}
                    type="email"
                    placeholder="Email address *"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.email ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.email}
                  </div>
                </div>
                <div
                  className={`${REPEATED_CLASSNAMES[1]} ${
                    errors.telephone
                      ? "[border-bottom:.0625rem_solid_#ff3636]"
                      : "[border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]"
                  }`}
                >
                  <input
                    className={REPEATED_CLASSNAMES[2]}
                    type="phone"
                    placeholder="Telephone *"
                    inputMode="numeric"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                  <div
                    className={`absolute top-full left-[0] mt-[.875rem] text-[1.125rem] text-[#ff3636] [transition:opacity_.4s_ease-in-out] ${
                      errors.telephone ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.telephone}
                  </div>
                </div>
                <h5
                  className={`${REPEATED_CLASSNAMES[3]} mt-[10.313rem] mb-[5.156rem]`}
                >
                  Any other details
                </h5>
                <h6 className={REPEATED_CLASSNAMES[0]}>
                  8. Any other details?
                </h6>
                <div
                  className={`${REPEATED_CLASSNAMES[1]} [border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]"
                `}
                >
                  <textarea
                    className="h-[9.0625rem] text-[1.219rem] w-full resize-none cursor-select-hover bg-transparent [border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)]"
                    placeholder="Your message (optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <h5
                  className={`${REPEATED_CLASSNAMES[3]} mt-[10.313rem] mb-[5.156rem]`}
                >
                  9. Where did you hear about BAGI Creatives?
                </h5>
                <div className="relative">
                  <input
                    className={REPEATED_CLASSNAMES[5]}
                    type="text"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    placeholder="Please select (optional)"
                    readOnly
                  />
                  <button
                    className={`${REPEATED_CLASSNAMES[2]} ${REPEATED_CLASSNAMES[1]} [border-bottom:.0625rem_solid_hsla(300,6%,94%,.6)] pr-0 gap-[1.875rem] cursor-select-hover`}
                    onClick={handleDropdownToggle}
                    type="button"
                  >
                    <span className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {formData.hearAboutUs || "Please select (optional)"}
                    </span>
                    <i className="flex w-[1.9375rem] h-[1.9375rem] min-w-[1.9375rem] items-center justify-center bg-[hsla(0,0%,85%,.1)] rounded-[50%] ml-auto">
                      <svg
                        className={`w-[.625rem] h-[.625rem] fill-[#d9d9d9] transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-90" : "-rotate-90"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                      >
                        <path d="m732.531 0 70.939 70.939-441.063 441.062L803.47 953.065 732.531 1024 220.53 512.001 732.531 0z"></path>
                      </svg>
                    </i>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute top-full left-[0] w-full border-[.0625rem] border-[solid] border-[#fff] -mt-[.0625rem] z-10 bg-[#0E0F11] select-none max-h-[18.75rem] overflow-y-auto text-[.8125rem] enter-done cursor-select-hover">
                      {[
                        "Word of Mouth",
                        "Google",
                        "Online Ad",
                        "LinkedIn",
                        "Press/News Article",
                        "Instagram",
                      ].map((option, index) => (
                        <li
                          key={option}
                          className={`text-[1.219rem] px-[1.875rem] py-[1.594rem] [transition:.4s_ease-in-out] [transition-property:background,color] hover:bg-[#f0eef0] hover:text-[#181818] ${
                            index % 2 === 0 ? "bg-[#181818]" : "bg-transparent"
                          }`}
                          data-current={formData.hearAboutUs === option}
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mt-[3.75rem] max-w-[35.625rem] text-[1.219rem] leading-[1.56] mb-[1.875rem] ">
                  By submitting you confirm you have read and agree to the
                  storage and use of your data as outlined in our privacy
                  policy.
                </div>
                <button
                  className="group inline-flex text-[.6875rem] text-[#0E0F11] select-none appearance-none border-[none] outline-[none] [box-shadow:none] bg-transparent cursor-pointer p-0 !no-underline Button_light__7Eo_i cursor-select-hover"
                  type="submit"
                >
                  <span className="text-[1.031rem] relative flex px-[2.344rem] py-[0] bg-white leading-[1.2] rounded-full items-center h-[4.219rem] whitespace-nowrap [transition:.4s_ease-in-out] [transition-property:background,color] ">
                    <span className="relative flex flex-col overflow-hidden">
                      <span
                        className={`group-hover:-translate-y-[1.4875rem] ${REPEATED_CLASSNAMES[9]}`}
                      >
                        Send enquiry
                      </span>
                      <span
                        className={`absolute translate-y-[1.4875rem] group-hover:translate-y-[0] ${REPEATED_CLASSNAMES[9]}`}
                      >
                        Send enquiry
                      </span>
                    </span>
                  </span>
                  <i className="flex justify-center items-center text-[4.219rem] w-[1em] h-[1em] rounded-[50%] bg-white [transition:.4s_ease-in-out] [transition-property:background,color]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      className={`fill-current w-[1.219rem] h-[1.219rem] ${REPEATED_CLASSNAMES[9]} rotate-[135deg] group-hover:rotate-[180deg]`}
                    >
                      <path d="M142.147 472.846 567.912 47.081 520.831 0 20.603 500.228 544.372 1024l47.081-47.086-437.489-437.486h849.431v-66.581H142.148z"></path>
                    </svg>
                  </i>
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="hidden [@media(min-width:960px)]:block [@media(min-width:960px)]:flex-[0_0_43.594rem] [@media(min-width:960px)]:ml-auto [@media(min-width:960px)]:sticky [@media(min-width:960px)]:top-[0] [@media(min-width:960px)]:mt-[7.1875rem]">
          <div className="ReviewWidget_block__eBBwG">
            <blockquote className="bg-[rgba(84,84,84,.2)] mt-[0] mx-[0] mb-[1.6875rem] rounded-2xl px-[2.625rem] py-9">
              <p className="leading-[1.4] !text-[1.688rem]">
                "It was refreshing that they really took the time to understand
                our brand and business, and listen to what we really wanted
                acheive from our website. It was good balance between BAGI
                Creatives being receptive to our ideas, but also really
                suggesting ways to improve on them and translate it for maximum
                impact."
              </p>
              <footer className="mt-[1.9375rem] !text-[1.125rem] leading-[1.26]">
                — Lorena Watson, Job Title
              </footer>
            </blockquote>
            <div className="flex items-center justify-between">
              <img
                className="w-[13.125rem]"
                alt="google-review"
                loading="lazy"
                width="140"
                height="28.9"
                decoding="async"
                data-nimg="1"
                src="/images/google-review.webp"
              />
              <a
                className="cursor-select-hover text-[1.219rem] text-[#fff] opacity-[.89] underline leading-[1.26] tracking-[.01625rem]"
                target="_blank"
                href=""
              >
                View all reviews ›
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
