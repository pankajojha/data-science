package com.trinity.datascience.dao.redis;

import com.trinity.datascience.service.auth.RestSessionBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.Map;

/**
 * Created by vojhapa on 10/30/15.
 */

@Repository
public class RedisAuthDAO {

    @Autowired
    private RedisTemplate<String, String> template;

    // inject the template as ListOperations
    // can also inject as Value, Set, ZSet, and HashOperations
    @Resource(name = "redisTemplate")
    private ListOperations<String, String> listOps;

    private static final int TIMEOUT = 1800;

    public String getSession(String key) {
        //    return get(token, TIMEOUT);
        return template.opsForValue().get(key);
    }

    public void add(String key, String restSessionBean) {
        template.opsForSet().add(key, restSessionBean);
    }

    public void save(String key, RestSessionBean restSessionBean) {
        this.template.opsForHash().put(key, restSessionBean.getLoginId(), restSessionBean);
    }

    public Map<Object, Object> find(String key) {
        return this.template.opsForHash().entries(key);
    }

    public void delete(String key) {
        template.opsForHash().delete(key);
    }

}
