package com.trinity.datascience.rest;

import com.trinity.datascience.domain.AuthData;
import com.trinity.datascience.exception.AuthorizationServiceException;
import com.trinity.datascience.service.auth.RestAuthService;
import com.trinity.datascience.service.auth.RestSessionBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.Map;
import java.util.UUID;

/**
 * Created by vojhapa on 10/30/15.
 */
@RestController
@RequestMapping(value = "/user")
public class Authenticator {

    @Autowired
    RestAuthService restAuthService;


    @RequestMapping(value = "/validate", method = RequestMethod.GET)
    public AuthData validate(@RequestParam(value = "ticket", defaultValue = "XXX") String ticket) {

        System.out.print("pankaj1");
        String sessionBean1 = restAuthService.getSession(ticket);
        System.out.print("pankaj" + sessionBean1);

        String userId = "";

        if(ticket.indexOf("_") > 0){
            userId = ticket.substring(ticket.indexOf("_"));
        }

        AuthData authData = new AuthData(ticket, userId);

        if (ticket == null) {
            authData.setStatusCode(AuthData.STATUS_CODE_FAILED);
            authData.setReason(AuthData.STATUS_REASON_BAD_TICKET);
        } else {
            authData.setTicket(ticket);
            String sessionBean = restAuthService.getSession(ticket);
            if (sessionBean == null) {
                authData.setStatusCode(authData.STATUS_CODE_FAILED);
                authData.setReason(authData.STATUS_REASON_EXPIRED + ":" + sessionBean);
            } else {
                authData.setReason(authData.STATUS_REASON_SUCCESS);
                authData.setStatusCode(authData.STATUS_CODE_SUCCESS);
            }
        }

        return authData;
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public AuthData signup(@RequestParam(value = "ticket", defaultValue = "XXX") String ticket) {
        return null;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public AuthData logout(@RequestParam(value = "ticket", defaultValue = "XXX") String ticket) {

        //remove rest session bean
        return null;
    }


    @RequestMapping(value = "/getuuid", method = RequestMethod.GET)
    public String getTestUuid(@RequestParam("client") String client,
                              @RequestParam("secret") String secret) throws Exception {
        try {
            //  String secret = System.getProperty(Constants.EPEN_API_CLIENT_SECRET);
            // String clientId = System.getProperty(Constants.EPEN_API_CLIENT);
            String clientId = "kt2epen";
            String secretId = "5b42403762633464373937253f79836c79deb3b98ffa253e0eec6c";

            if (client != null && secret != null && clientId.equals(client) && secret.equals(secretId)) {
                String token = UUID.randomUUID().toString();
                int expirationTime = 10;
                restAuthService.add(token, clientId, expirationTime);
                String data = "{token:" + token + " , expiration " + expirationTime + "}";
                return data;
            } else {
                String s = "{System issue ... contact admin secretid :" + secretId + " clientid " + clientId + "secret " + secret + " client_url " + client + "}";
                return s;
            }
        } catch (Exception e) {
            return "{EPEN Exception server issue }";
        }
    }

    @RequestMapping("/token")
    @ResponseBody
    public Map<String, String> token(HttpSession session) {
        return Collections.singletonMap("token", session.getId());
    }


    protected RestSessionBean getRestSession(String uuid) {
        RestSessionBean rsb = restAuthService.getRestSession(uuid);
        if (rsb == null) {
            throw new AuthorizationServiceException("user not logged in");
        }
        return rsb;
    }

}
