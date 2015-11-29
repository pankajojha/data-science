package com.trinity.datascience.dao.redis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;

/**
 * Created by vojhapa on 10/31/15.
 */
@Component
public class RedisBean {


    @Autowired
    private StringRedisTemplate stringRedisTemplate;


// RedisConnectionFactory, StringRedisTemplate or vanilla RedisTemplate
    @Autowired
    public RedisBean(StringRedisTemplate template) {
        this.stringRedisTemplate = template;
    }

    public String getSession(String token) {
        ValueOperations<String, String> ops = this.stringRedisTemplate.opsForValue();
        //String key = "spring.boot.redis.test";
        //if (!this.stringRedisTemplate.hasKey(key)) {
          //  ops.set(key, "foo");
        //}
        if(this.stringRedisTemplate.hasKey(token)){
            return ops.get(token);
        }
        //System.out.println("Found key " + key + ", value=" + ops.get(key));
        return null;
    }

}
