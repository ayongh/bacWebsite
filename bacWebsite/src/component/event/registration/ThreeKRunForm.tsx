import { Button, Grid2, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import FormikSelect from "../../common/FormComponent/FormikSelect";
import FormikTextField from "../../common/FormComponent/FormikTextField";
import * as yup from "yup";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripCardForm from "../../common/StripeCardForm";

interface Props {}

let schema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  shirtSize: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email"),
  emergencyContact: yup.string().required("Required"),
});

const stripePromise = loadStripe(
  "pk_test_51R4pGdAkDY1S0PNq9OVrnLaWkXXDgJJsyYIEVJMey70YfhbodPg0URo1Y59APu2fLGHYs1FatYBAhHV3GMm5kmRL00yhVeCERH"
);

const ThreeKRunForm: React.FC<Props> = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51R4pGdAkDY1S0PNqsdnOtbHvGgMxQVvypPcDDFIt5WPsKBufXto0RvHNMv78ZkuOKVIrw1hJFHObM5znPkrbuz2500CfH4Df3V",
  };

  return (
    <Grid2
      container
      sx={{
        justifyContent: "center",
        display: "flex",
      }}>
      <Grid2
        item
        container
        spacing={2}
        sx={{ maxWidth: "1200px", marginTop: "200px", padding: "0px 50px" }}>
        <Grid2
          item
          size={{ xs: 12 }}
          sx={{
            justifyContent: "center",
            textAlign: "center",
            marginBottom: "20px",
          }}>
          <Typography variant="h6">Register For 3k Run</Typography>
        </Grid2>
        <Grid2 item container size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Grid2
            item
            size={{ xs: 12 }}
            sx={{ justifyContent: "center", display: "flex" }}>
            <Typography variant="body1">Agreement</Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12 }}>
            <Typography variant="body2">Liability Risk</Typography>
            <Typography variant="caption" color="textSecondary">
              By entering the competition, participants accept full
              responsibility for their involvement and acknowledge the inherent
              risks involved in physical activity. The organizers are not liable
              for any injuries, accidents, or incidents that may occur during
              the competition.
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12 }}>
            <Typography variant="body2">Privacy and Data Use</Typography>
            <Typography variant="caption" color="textSecondary">
              By participating, you agree that your name, image, and other
              personal information may be used for promotional purposes directly
              or indirectly related to the competition. Your participation
              indicates consent to these uses.
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              shirtSize: "",
              email: "",
              emergencyContact: "",
            }}
            validationSchema={schema}
            validateOnChange
            onSubmit={(values, { setSubmitting }) => {}}>
            {(formikBag) => (
              <Form noValidate>
                <Grid2 container spacing={2}>
                  <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <FormikTextField
                      name="firstName"
                      label="First Name"
                      required={true}
                    />
                  </Grid2>
                  <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <FormikTextField
                      name="lastName"
                      label="Last Name"
                      required
                    />
                  </Grid2>
                  <Grid2 item size={{ xs: 12 }}>
                    <FormikSelect
                      name="shirtSize"
                      label="Shirt Size"
                      options={[
                        { key: "xs", label: "XS" },
                        { key: "sm", label: "SM" },
                        { key: "md", label: "MD" },
                        { key: "lg", label: "LG" },
                        { key: "xlg", label: "XLG" },
                      ]}
                      required
                    />
                  </Grid2>
                  <Grid2 item size={{ xs: 12 }}>
                    <FormikTextField name="email" label="Email" required />
                  </Grid2>
                  <Grid2 item size={{ xs: 12 }}>
                    <FormikTextField
                      name="emergencyContact"
                      label="Emergency Phone"
                      required
                    />
                  </Grid2>

                  <Grid2
                    item
                    size={{ xs: 12 }}
                    sx={{ justifyContent: "end", display: "flex" }}>
                    <Button variant={"contained"} type="submit" disabled>
                      Submit
                    </Button>
                  </Grid2>
                </Grid2>
              </Form>
            )}
          </Formik>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ThreeKRunForm;
