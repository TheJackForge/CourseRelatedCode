import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
    let error = ref(null)
    let isPending = ref(false)

    let docRef = projectFirestore.collection(collection).doc(id)

    const deleteDoc = async () => {
        error.value = null
        isPending.value = true

        try {
            const res = await docRef.delete()
            isPending.value = false
            return res
        } catch(err) {
            console.log(err.message)
            isPending.value = false
            error.value = "Could not delete the document"
        }
    }

    const updateDoc = async (updates) => {
        error.value = null
        isPending.value = true
        try {
            const res = await docRef.update(updates)
            isPending.value = false
            return res
        } catch(err) {
            console.log(err.message)
            isPending.value = false
            error.value = "Could not update the document"
        }
    }

    return { error, isPending, deleteDoc, updateDoc }
}

export default useDocument