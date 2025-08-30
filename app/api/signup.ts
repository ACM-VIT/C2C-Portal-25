import { getServerSession } from "next-auth/next";

interface InternalSignupData {
  name: string;
  email: string;
  contact_number: string;
  gender: string;
  reg_no: string;
}

interface ExternalSignupData {
  name: string;
  email: string;
  contact_number: string;
  gender: string;
  college_name: string;
}

// Function for internal users (VIT students)
export async function signupInternal(data: InternalSignupData) {
  try {
    const session = await getServerSession();
    
    if (!session?.backendToken) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.backendToken}`,
      },
      body: JSON.stringify({
        contact_number: data.contact_number,
        gender: data.gender,
        reg_no: data.reg_no,
        role: "participant",
        internal: true,
        college_name: "" // Not needed for internal users
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Signup failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Internal signup error:', error);
    throw error;
  }
}

// Function for external users (non-VIT students)
export async function signupExternal(data: ExternalSignupData) {
  try {
    const session = await getServerSession();
    
    if (!session?.backendToken) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.backendToken}`,
      },
      body: JSON.stringify({
        contact_number: data.contact_number,
        gender: data.gender,
        reg_no: "", // Not needed for external users
        role: "participant",
        internal: false,
        college_name: data.college_name
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Signup failed');
    }

    return await response.json();
  } catch (error) {
    console.error('External signup error:', error);
    throw error;
  }
}