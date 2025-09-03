type User = {
  name: string;
  password: string;
};

export async function login(user: User) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const response = await fetch("https://riddle-project-2.onrender.com/player/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const data = await response.json();
    return data.token; 
  } catch (err) {
    console.error("Error during login:", err);
    return null; 
  }
}

export async function signup(user: User) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const response = await fetch("https://riddle-project-2.onrender.com/player/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Signup failed: ${response.status}`);
    }

    const data = await response.json();
    return data.token; 
  } catch (err) {
    console.error("Error during signup:", err);
    return null;
  }
}

