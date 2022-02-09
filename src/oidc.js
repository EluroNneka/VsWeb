export const IDENTITY_CONFIG = {
    authority:  process.env.REACT_APP_ISSUER, //(string): The URL of the OIDC provider.
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID, //(string): Your client application's identifier as registered with the OIDC provider.
    redirect_uri: process.env.REACT_APP_REDIRECT_URL, //The URI of your client application to receive a response from the OIDC provider.
    login:  process.env.REACT_APP_ISSUER + "/account/signin",
    //automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
    loadUserInfo: true, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
   // silent_redirect_uri: process.env.REACT_APP_SILENT_REDIRECT_URL, //(string): The URL for the page containing the code handling the silent renew.
    //post_logout_redirect_uri: process.env.REACT_APP_LOGOFF_REDIRECT_URL, // (string): The OIDC post-logout redirect URI.
    //audience: "https://example.com", //is there a way to specific the audience when making the jwt
    responseType: "code", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
    grantType: "authorization_code",
    scope: "openid email profile", //(string, default: 'openid'): The scope being requested from the OIDC provider.
    //webAuthResponseType: "id_token"
};

export const METADATA_OIDC = {
    issuer: process.env.REACT_APP_ISSUER,
    jwks_uri: process.env.REACT_APP_ISSUER + "/jwks",
    authorization_endpoint: process.env.REACT_APP_AUTH_URL,
    token_endpoint: process.env.REACT_APP_ISSUER + "/oauth/token",
    userinfo_endpoint: process.env.REACT_APP_ISSUER + "/oauth/userinfo",
    end_session_endpoint: process.env.REACT_APP_ISSUER + "/account/signout",
   // check_session_iframe: process.env.REACT_APP_ISSUER + "/connect/checksession",
    revocation_endpoint: process.env.REACT_APP_ISSUER + "/oauth/token/revoke",
    introspection_endpoint: process.env.REACT_APP_ISSUER + "/oauth/token/introspect"
};