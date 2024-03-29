import { ref } from "vue"
import { projectAuth } from "@/firebase/config"

const error = ref(null)

const signup = async (email,password,name) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!res) {
            throw new Error('could not complete the signup')
        }
        console.log(res.user)
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {
    return {error,signup}
}

export default useSignup