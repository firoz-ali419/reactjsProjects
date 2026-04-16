
import { Client, Account, ID } from "appwrite";
import conf from "../config/conf";

export class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get()

        } catch (error) {
           console.log("Appwrite Servive :: getCurrentUser :: error",error);
        }
        return null
    }
    async logout(){
        try {
            return this.account.deleteSessions('current')
            
        } catch (error) {
            console.log("Appwrite Servive :: logout :: error",error);
            
        }
    }

}

const authAccount = new AuthService()


export default authAccount