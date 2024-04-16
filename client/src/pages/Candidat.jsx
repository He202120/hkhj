import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import NavBar from "@/components/NavBar";

export default function Candidat() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/players', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Nous rejoindre</h1>
          <p className="text-gray-500 dark:text-gray-400">Le RFC Wetteren est constamment à la recherche de nouveaux talents pour rejoindre nos rangs dans toutes les catégories.</p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className="flex space-x-2">
            <div className="w-1/2 space-y-2">
              <Label htmlFor="firstName">Prénom <span className="text-red-600">*</span></Label>
              <Input name="firstName" id="firstName" placeholder="John" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="w-1/2 space-y-2">
              <Label htmlFor="lastName">Nom <span className="text-red-600">*</span></Label>
              <Input name="lastName" id="lastName" placeholder="Doe" required value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="w-1/2 space-y-2">
              <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
              <Input name="email" id="email" placeholder="example@email.com" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="w-1/2 space-y-2">
                <Label htmlFor="phone">Numéro de téléphone <span className="text-red-600">*</span></Label>
                <Input name="phone" id="phone" type="phone" placeholder="+32 412 25 36" required value={formData.phone} onChange={handleChange} />
            </div>

          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date de naissance <span className="text-red-600">*</span></Label>
            <Input name="dateOfBirth" id="dateOfBirth" type="date" required value={formData.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe <span className="text-red-600">*</span></Label>
            <Input name="password" id="password" required type="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Présente-toi <span className="text-red-600">*</span></Label>
            <Textarea name="description" id="description" placeholder="Poste, projets, anciens clubs etc ..." required value={formData.description} onChange={handleChange} />
          </div>
          <p><span className="text-red-600">*</span> champs obligatoires</p>
          <Button className="w-full" type="submit" variant="rfc">Postuler</Button>
        </form>
      </div>
    </>
  )
}










