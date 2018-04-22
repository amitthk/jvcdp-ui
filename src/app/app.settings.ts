import { environment } from '../environments/environment';

export class AppSettings {
    public static envEndpoints = new Map([['local', 'http://localhost:8081/'],[ 'dev', '/jvcdpapi/'],[ 'sit', '/jvcdpapi/'], [ 'uat', '/jvcdpapi/'],[ 'prod', '/jvcdpapi/']]);
    public static API_ENDPOINT= AppSettings.envEndpoints.get(environment.env);
  }
