/* =========================================================
   FUTUREFUNDS
   Landing Page JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);

      const screenReaderText =
        menuToggle.querySelector(".sr-only");

      if (screenReaderText) {
        screenReaderText.textContent =
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu";
      }
    });


    /* Close mobile navigation after a link is selected */
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");

        const screenReaderText =
          menuToggle.querySelector(".sr-only");

        if (screenReaderText) {
          screenReaderText.textContent =
            "Open navigation menu";
        }
      });
    });
  }



  /* =======================================================
     FINANCIAL CALCULATORS
     ======================================================= */

  const calculatorButtons =
    document.querySelectorAll(".calculator-trigger");

  const calculatorPanel =
    document.getElementById("calculator-panel");

  const calculatorTitle =
    document.getElementById("calculator-title");

  const calculatorContent =
    document.getElementById("calculator-content");

  const calculatorClose =
    document.getElementById("calculator-close");


  calculatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const calculatorType =
        button.dataset.calculator;

      if (!calculatorPanel || !calculatorContent) {
        return;
      }

      calculatorPanel.hidden = false;

      if (calculatorType === "mortgage") {
        showMortgageCalculator();
      }

      if (calculatorType === "debt") {
        showDebtCalculator();
      }

      if (calculatorType === "retirement") {
        showRetirementCalculator();
      }

      calculatorPanel.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    });

  });


  if (calculatorClose) {
    calculatorClose.addEventListener("click", () => {
      calculatorPanel.hidden = true;
      calculatorContent.innerHTML = "";
    });
  }



  /* =======================================================
     MORTGAGE CALCULATOR
     ======================================================= */

  function showMortgageCalculator() {

    calculatorTitle.textContent =
      "Mortgage Calculator";

    calculatorContent.innerHTML = `
      <form
        class="calculator-form"
        id="mortgage-form"
      >

        <div class="form-group">
          <label for="home-price">
            Home price
          </label>

          <input
            id="home-price"
            type="number"
            min="0"
            step="1000"
            value="350000"
            required
          >
        </div>


        <div class="form-group">
          <label for="down-payment">
            Down payment
          </label>

          <input
            id="down-payment"
            type="number"
            min="0"
            step="1000"
            value="70000"
            required
          >
        </div>


        <div class="form-group">
          <label for="mortgage-rate">
            Interest rate (%)
          </label>

          <input
            id="mortgage-rate"
            type="number"
            min="0"
            step="0.01"
            value="6.5"
            required
          >
        </div>


        <div class="form-group">
          <label for="loan-years">
            Loan term
          </label>

          <select id="loan-years">
            <option value="15">
              15 years
            </option>

            <option value="20">
              20 years
            </option>

            <option
              value="30"
              selected
            >
              30 years
            </option>
          </select>
        </div>


        <button
          type="submit"
          class="button button-primary"
        >
          Calculate Monthly Payment
        </button>


        <div
          class="calculator-result"
          id="mortgage-result"
          aria-live="polite"
        >
          Enter your information and select
          Calculate Monthly Payment.
        </div>

      </form>
    `;


    const mortgageForm =
      document.getElementById("mortgage-form");


    mortgageForm.addEventListener("submit", (event) => {

      event.preventDefault();


      const price =
        Number(
          document.getElementById("home-price").value
        );


      const downPayment =
        Number(
          document.getElementById("down-payment").value
        );


      const annualRate =
        Number(
          document.getElementById("mortgage-rate").value
        );


      const years =
        Number(
          document.getElementById("loan-years").value
        );


      const result =
        document.getElementById("mortgage-result");


      if (
        price <= 0 ||
        downPayment < 0 ||
        downPayment >= price ||
        annualRate < 0 ||
        years <= 0
      ) {

        result.innerHTML =
          "Please enter valid mortgage information.";

        return;
      }


      const principal =
        price - downPayment;

      const numberOfPayments =
        years * 12;

      const monthlyRate =
        annualRate / 100 / 12;


      let payment;


      if (monthlyRate === 0) {

        payment =
          principal / numberOfPayments;

      } else {

        payment =
          principal *
          (
            monthlyRate *
            Math.pow(
              1 + monthlyRate,
              numberOfPayments
            )
          ) /
          (
            Math.pow(
              1 + monthlyRate,
              numberOfPayments
            ) - 1
          );

      }


      result.innerHTML = `
        Estimated monthly principal and
        interest payment:

        <strong>
          ${formatCurrency(payment)}
        </strong>

        <small>
          Estimate does not include property taxes,
          homeowners insurance, mortgage insurance,
          HOA fees, or other costs.
        </small>
      `;

    });

  }



  /* =======================================================
     DEBT PAYOFF CALCULATOR
     ======================================================= */

  function showDebtCalculator() {

    calculatorTitle.textContent =
      "Debt Payoff Calculator";

    calculatorContent.innerHTML = `
      <form
        class="calculator-form"
        id="debt-form"
      >

        <div class="form-group">
          <label for="debt-balance">
            Current debt balance
          </label>

          <input
            id="debt-balance"
            type="number"
            min="1"
            step="100"
            value="12000"
            required
          >
        </div>


        <div class="form-group">
          <label for="debt-rate">
            Annual interest rate (%)
          </label>

          <input
            id="debt-rate"
            type="number"
            min="0"
            step="0.01"
            value="18"
            required
          >
        </div>


        <div class="form-group">
          <label for="monthly-payment">
            Monthly payment
          </label>

          <input
            id="monthly-payment"
            type="number"
            min="1"
            step="10"
            value="400"
            required
          >
        </div>


        <button
          type="submit"
          class="button button-primary"
        >
          Calculate Payoff Time
        </button>


        <div
          class="calculator-result"
          id="debt-result"
          aria-live="polite"
        >
          Enter your debt information and select
          Calculate Payoff Time.
        </div>

      </form>
    `;


    const debtForm =
      document.getElementById("debt-form");


    debtForm.addEventListener("submit", (event) => {

      event.preventDefault();


      let balance =
        Number(
          document.getElementById("debt-balance").value
        );


      const annualRate =
        Number(
          document.getElementById("debt-rate").value
        );


      const monthlyPayment =
        Number(
          document.getElementById("monthly-payment").value
        );


      const result =
        document.getElementById("debt-result");


      if (
        balance <= 0 ||
        annualRate < 0 ||
        monthlyPayment <= 0
      ) {

        result.innerHTML =
          "Please enter valid debt information.";

        return;
      }


      const monthlyRate =
        annualRate / 100 / 12;


      const firstMonthInterest =
        balance * monthlyRate;


      if (
        monthlyRate > 0 &&
        monthlyPayment <= firstMonthInterest
      ) {

        result.innerHTML = `
          Your monthly payment is too low to
          reduce this balance because it does
          not cover the monthly interest.
        `;

        return;
      }


      let months = 0;
      let totalInterest = 0;

      const maximumMonths = 1200;


      while (
        balance > 0 &&
        months < maximumMonths
      ) {

        const interest =
          balance * monthlyRate;

        totalInterest += interest;

        balance += interest;

        balance -= monthlyPayment;

        months++;

      }


      if (months >= maximumMonths) {

        result.innerHTML = `
          The payoff period is too long to
          calculate with these values.
        `;

        return;
      }


      const years =
        Math.floor(months / 12);

      const remainingMonths =
        months % 12;


      let payoffText = "";


      if (years > 0) {

        payoffText +=
          `${years} ${years === 1 ? "year" : "years"}`;

      }


      if (
        years > 0 &&
        remainingMonths > 0
      ) {

        payoffText += " and ";

      }


      if (remainingMonths > 0) {

        payoffText +=
          `${remainingMonths} ${
            remainingMonths === 1
              ? "month"
              : "months"
          }`;

      }


      result.innerHTML = `
        Estimated payoff time:

        <strong>
          ${payoffText}
        </strong>

        Estimated interest paid:
        <strong>
          ${formatCurrency(totalInterest)}
        </strong>
      `;

    });

  }



  /* =======================================================
     RETIREMENT CALCULATOR
     ======================================================= */

  function showRetirementCalculator() {

    calculatorTitle.textContent =
      "Retirement Calculator";

    calculatorContent.innerHTML = `
      <form
        class="calculator-form"
        id="retirement-form"
      >

        <div class="form-group">
          <label for="current-savings">
            Current retirement savings
          </label>

          <input
            id="current-savings"
            type="number"
            min="0"
            step="100"
            value="20000"
            required
          >
        </div>


        <div class="form-group">
          <label for="monthly-contribution">
            Monthly contribution
          </label>

          <input
            id="monthly-contribution"
            type="number"
            min="0"
            step="50"
            value="500"
            required
          >
        </div>


        <div class="form-group">
          <label for="retirement-years">
            Years until retirement
          </label>

          <input
            id="retirement-years"
            type="number"
            min="1"
            max="70"
            value="30"
            required
          >
        </div>


        <div class="form-group">
          <label for="return-rate">
            Estimated annual return (%)
          </label>

          <input
            id="return-rate"
            type="number"
            min="0"
            step="0.1"
            value="6"
            required
          >
        </div>


        <button
          type="submit"
          class="button button-primary"
        >
          Estimate Retirement Savings
        </button>


        <div
          class="calculator-result"
          id="retirement-result"
          aria-live="polite"
        >
          Enter your information and select
          Estimate Retirement Savings.
        </div>

      </form>
    `;


    const retirementForm =
      document.getElementById("retirement-form");


    retirementForm.addEventListener("submit", (event) => {

      event.preventDefault();


      const currentSavings =
        Number(
          document.getElementById("current-savings").value
        );


      const monthlyContribution =
        Number(
          document.getElementById(
            "monthly-contribution"
          ).value
        );


      const years =
        Number(
          document.getElementById(
            "retirement-years"
          ).value
        );


      const annualRate =
        Number(
          document.getElementById(
            "return-rate"
          ).value
        );


      const result =
        document.getElementById(
          "retirement-result"
        );


      if (
        currentSavings < 0 ||
        monthlyContribution < 0 ||
        years <= 0 ||
        annualRate < 0
      ) {

        result.innerHTML =
          "Please enter valid retirement information.";

        return;
      }


      const months =
        years * 12;

      const monthlyRate =
        annualRate / 100 / 12;


      let futureValue;


      if (monthlyRate === 0) {

        futureValue =
          currentSavings +
          monthlyContribution * months;

      } else {

        const savingsGrowth =
          currentSavings *
          Math.pow(
            1 + monthlyRate,
            months
          );


        const contributionGrowth =
          monthlyContribution *
          (
            (
              Math.pow(
                1 + monthlyRate,
                months
              ) - 1
            ) /
            monthlyRate
          );


        futureValue =
          savingsGrowth +
          contributionGrowth;

      }


      const totalContributions =
        currentSavings +
        monthlyContribution * months;


      const estimatedGrowth =
        futureValue -
        totalContributions;


      result.innerHTML = `
        Estimated retirement savings:

        <strong>
          ${formatCurrency(futureValue)}
        </strong>

        Your contributions:
        <strong>
          ${formatCurrency(totalContributions)}
        </strong>

        Estimated investment growth:
        <strong>
          ${formatCurrency(estimatedGrowth)}
        </strong>

        <small>
          This is an illustrative estimate and does
          not guarantee future investment performance.
        </small>
      `;

    });

  }



  /* =======================================================
     CONSULTATION FORM
     ======================================================= */

  const consultationForm =
    document.getElementById(
      "consultation-form"
    );

  const formMessage =
    document.getElementById(
      "form-message"
    );


  if (
    consultationForm &&
    formMessage
  ) {

    consultationForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const name =
          document.getElementById("name");

        const email =
          document.getElementById("email");


        formMessage.classList.remove(
          "success",
          "error"
        );


        if (!name.value.trim()) {

          formMessage.textContent =
            "Please enter your name.";

          formMessage.classList.add("error");

          name.focus();

          return;
        }


        if (!email.value.trim()) {

          formMessage.textContent =
            "Please enter your email address.";

          formMessage.classList.add("error");

          email.focus();

          return;
        }


        if (!isValidEmail(email.value)) {

          formMessage.textContent =
            "Please enter a valid email address.";

          formMessage.classList.add("error");

          email.focus();

          return;
        }


        formMessage.textContent =
          `Thanks, ${name.value.trim()}! ` +
          "Your consultation request has been received. " +
          "This portfolio prototype does not submit real client information.";

        formMessage.classList.add("success");


        consultationForm.reset();

      }
    );

  }



  /* =======================================================
     HELPER FUNCTIONS
     ======================================================= */

  function formatCurrency(value) {

    return new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }
    ).format(value);

  }


  function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );

  }

});