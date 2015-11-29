package com.trinity.datascience.service.auth;

import com.trinity.datascience.dao.redis.RedisAuthDAO;
import com.trinity.datascience.exception.AuthorizationServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.Base64;

/**
 * Created by vojhapa on 10/30/15.
 */
@Service
public class RestAuthService {

    @Autowired
    RedisAuthDAO redisAuthDAO;

    public String getSession(String ticket){
        String sessionBean = redisAuthDAO.getSession(ticket);
        return sessionBean;
    }

    public RestSessionBean getRestSession(String uuid) {
        String sessionBean = redisAuthDAO.getSession(uuid);
        RestSessionBean rsb = deserialize(sessionBean);
        if (rsb == null) {
            throw new AuthorizationServiceException("user not logged in");
        }
        return rsb;
    }

    public void add(String key, String value, int expiration){
        redisAuthDAO.add(key, value);
    }

    public RestSessionBean deserialize(String beanString) throws AuthorizationServiceException {
        try {

            byte[] bytes = Base64.getDecoder().decode(beanString);
            ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
            ObjectInputStream in = new ObjectInputStream(bis);
            RestSessionBean rsb = (RestSessionBean) in.readObject();
            return rsb;
        } catch (IOException | ClassNotFoundException e) {

            throw new AuthorizationServiceException(e);
        }
    }

    public String serialize(Object object) throws AuthorizationServiceException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try {
            ObjectOutput out = new ObjectOutputStream(bos);
            out.writeObject(object);
            out.close();
            byte[] bytes = bos.toByteArray();
           //String strEncoded = Base64.getEncoder().encodeToString( str.getBytes( "utf-8" ));
            String retVal = Base64.getEncoder().encodeToString( bytes );
           // String retVal = codec.encodeAsString(bytes);
            return retVal;
        } catch (IOException t) {
            throw new AuthorizationServiceException(t);
        }
    }

}
