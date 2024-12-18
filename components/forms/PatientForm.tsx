"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustormFormField from "../CustormFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      // const userData = { name, email, phone };
      // const user = await createUser(userData);
      // if (user) router.push(`/patients/${user.$id}/register`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-10 space-y-4">
          <h1 className="header">Bienvenido 👋</h1>
          <p className="text-dark-700">Vamos a agendar su cita médica</p>
          <p className="text-dark-700">
            Por favor, complete los siguentes datos:
          </p>
        </section>
        {/* nombre */}
        <CustormFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Nombre completo"
          placeholder="Ingrese su nombre"
          iconSrc="/assets/icons/user.svg"
          iconAlt="usuario"
        />
        {/* Email */}
        <CustormFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Correo electrónico"
          placeholder="ejemplo@usuario.cl"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        {/* Teléfono */}
        <CustormFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Teléfono"
          placeholder="(+56) 9 1234567"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <SubmitButton isLoading={isLoading}>Ingresar</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
