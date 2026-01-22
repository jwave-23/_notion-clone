import { supabase } from "../supabaseClient"
import type { Session } from "@supabase/supabase-js"
import { type ReactNode, useState, useEffect } from "react"
import { AuthSessionContext } from "./useAuthSession"

type AuthSessionProviderProps = {
	children: ReactNode
}

export const AuthSessionProvider = ({children}: AuthSessionProviderProps) => {
	const [ session, setSession ] = useState<Session | null>(null)
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const auth = async () => {
			const {data, error } = await supabase.auth.getSession()
			if(data.session){
				setSession(data.session)
				setLoading(false)
			} else {
				console.log(error)
			}
		}
		auth()
		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
			setLoading(false)
		})
	}, [])

	return (
		<AuthSessionContext.Provider value={{ session, loading }}>
			{children}
		</AuthSessionContext.Provider>
	)
}

