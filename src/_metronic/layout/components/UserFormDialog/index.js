import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box
} from "@material-ui/core";
import CustomInput from "../CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStyles } from "./style";

const UserFormDialog = ({ open, handleClose, userData }) => {
  const [isOldUser, setIsOldUser] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();

  const initialValues = React.useMemo(() => {
    if (userData) {
      return {
        userName: userData.name,
        email: userData.email || "",
        phone: userData.phone
      };
    } else {
      return {
        userName: "",
        email: "",
        phone: "",
        password: ""
      };
    }
  }, [userData]);

  const LoginSchema = Yup.object().shape({
    userName: Yup.string().required("يرجى ادخال اسم المستخدم"),
    email: Yup.string()
      .email("يرجى التاكد من عنوان الايميل")
      .min(3, "الحد الأدنى 3 احرف")
      .max(50, "الحد الأقصى 50 حرف")
      .required("يرجى ادخال الايميل"),
    phone: Yup.string()
      .min(3, "الحد الأدنى 3 احرف")
      .max(20, "الحد الأقصى 20 حرف")
      .required("يرجى ادخال رقم الهاتف"),
    password:
      !isOldUser &&
      Yup.string()
        .min(6, "الحد الأدنى 6 احرف")
        .max(50, "الحد الأقصى 50 حرف")
        .required("يرجى ادخال كلمة المرور")
  });

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values, "submit", "test validation formik");
    }
  });
  console.log(formik, "test validation formik", initialValues);

  React.useEffect(() => {
    if (!userData) {
      setIsOldUser(false);
    }
  }, [userData]);

  const dialogTitle = isOldUser
    ? `تحديث بيانات ${userData?.name}`
    : "اضافة مستخدم جديد";

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent className={classes.dialogContent}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <CustomInput
              placeholder="اسم المستخدم"
              name="userName"
              {...formik.getFieldProps("userName")}
              fullWidth
            />
            {formik.touched.userName && formik.errors.userName && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">{formik.errors.userName}</div>
              </div>
            )}
            <CustomInput
              placeholder="الايميل"
              name="email"
              {...formik.getFieldProps("email")}
              type="email"
              fullWidth
            />
            {formik.touched.email && formik.errors.email && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">{formik.errors.email}</div>
              </div>
            )}
            <CustomInput
              placeholder="رقم الهاتف"
              name="phone"
              {...formik.getFieldProps("phone")}
              fullWidth
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">{formik.errors.phone}</div>
              </div>
            )}
            {!isOldUser && (
              <>
                <CustomInput
                  placeholder="كلمة المرور"
                  name="password"
                  {...formik.getFieldProps("password")}
                  fullWidth
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      {formik.errors.password}
                    </div>
                  </div>
                )}
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            // onClick={handleClose} // fater submiting
            color="primary"
            variant="contained"
            disabled={formik.isSubmitting}
          >
            submit
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserFormDialog;
