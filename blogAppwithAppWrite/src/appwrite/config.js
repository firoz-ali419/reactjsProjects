import { Client, Databases, Query, Storage, ID } from "appwrite";
import conf from "../config/conf";


export class DatabaseService {
    client = new Client()
    database;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.account.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, slug, content, featuredImage, status, userId })
        } catch (error) {
            console.log("Appwrite Service :: createPost :: Error", error);

        }
    }
    async updatePost(slug, { title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.account.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, slug, content, featuredImage, status, userId })
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: Error", error);

        }
    }
    async deletePost(slug) {
        try {

            await this.database.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: Error", error);
            return false
        }
    }
    async getPost(slug) {
        try {
            return await this.database.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log("Appwrite Service :: getPost :: Error", error);
            return false
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId,queries)
        } catch (error) {
             console.log("Appwrite Service :: getPosts :: Error", error);
            return false
        }
    }
    //File Upload Service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
            
        } catch (error) {
             console.log("Appwrite Service :: uploadFile :: Error", error);
             return false
        }
    }

    async deleteFil(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
            return true
        } catch (error) {
            console.log("Appwrite Service :: getPost :: Error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
    }

}

const databaseService = new DatabaseService()


export default databaseService