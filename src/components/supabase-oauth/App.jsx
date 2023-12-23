
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-4 sm:px-6  lg:w-1/2 lg:px-8 ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem, at itaque nostrum!</p>
          </div>
          <div className="mx-auto mb-0 max-w-md space-y-4 ">
            <Auth
              supabaseClient={supabase}
              appearance={{
                style: {
                  button: {
                    background: 'black',
                    color: 'white',
                    padding: '10px',
                  },
                  anchor: { color: 'blue' },
                  input: { padding: '10px' },
                  divider: {
                    background: 'black',
                    margin: '0px',
                  },
                  //..
                },
              }}
              providers={['discord', 'github']}
            />
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    );
  } else {
    return (
      <div>
        {session ? (
          <>
            <div className="max-w-screen h-screen px-6 lg:px-8 my-auto flex justify-center items-center flex-col gap-5">
              <h1 className="font-bebas text-[5rem] mb-2  text-xl font-semibold">
                Hello, <span className="text-blue-500">{session.user.email}</span>
              </h1>

              <button onClick={() => supabase.auth.signOut()} href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Sign Out</span>
              </button>
            </div>
          </>
        ) : (
          <p>Please sign in</p>
        )}
      </div>
    );
  }
}

