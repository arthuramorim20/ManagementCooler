// Exemplo do contexto
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";



const AuthContext = createContext<any>({ user: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<supabase.auth.User | null>(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            const { data, error } = await supabase.auth.getSession();

            if (data.session?.user) {  //Verifica se existe alguma sessão
                setUser(data.session.user);
            } else {
                setUser(null);
            }

            setLoading(false);
        }

        initAuth()

        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_, session) => setUser(session?.user ?? null)
        );

        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={{ user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
