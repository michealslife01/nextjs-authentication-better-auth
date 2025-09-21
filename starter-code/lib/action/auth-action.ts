'use server';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';


export const signUp = async (email: string, password: string, name: string ) => {
    const result = await auth.api.signUpEmail({
        body:{
            email,
            password,
            name,
            callbackURL: '/dashboard',
        },
    });

    return result;
}

export const signIn = async ( email: string, password: string) => {
    const result = await auth.api.signInEmail({
        body:{
        email,
        password,
        callbackURL: '/dashboard',
        },
    });
    return result;
}


export const signOut = async () => {
    const result = await auth.api.signOut({headers: await headers()});

    return result;
}

export const signInSocial = async (provider: "github" | "google") => {
    const { url } = await auth.api.signInSocial({
        body:{
            provider,
            callbackURL: "/dashboard",
        },
    })
    if (url) {
        redirect(url);
    }
}