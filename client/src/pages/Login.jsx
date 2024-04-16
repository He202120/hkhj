import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return null;
};


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = getCookie("token"); 
    if (token) {
      navigate("/account/dashboard");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", { email, password }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const { token } = response.data;
      document.cookie = `token=${token}; max-age=${4 * 60 * 60}`;
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {error && (
        <Alert variant="destructive" className="w-[350px] mb-5">
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
          <CardDescription>Entrez vos informations pour vous connecter.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Adresse mail <span className="text-red-600">*</span></Label>
                <Input id="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Mot de passe <span className="text-red-600">*</span></Label>
                <Input type="password" id="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <Button type="submit" variant="rfc" className="w-full mt-5 m">Se connecter</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login;












