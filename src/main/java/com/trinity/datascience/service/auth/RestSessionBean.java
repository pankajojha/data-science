package com.trinity.datascience.service.auth;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

/**
 * Created by vojhapa on 10/30/15.
 */
public class RestSessionBean implements Serializable {


    private static final long serialVersionUID = 4214661172566904504L;

    private long userId;

    private String loginId;

    private String sessionId;

    private Date lastTouchTime = new Date();

    private String currentTask = "not set";

    private String currentTaskName = null;

    private TimeZone timeZone;

    private String sessionEndType;

    private Map<String, Object> store = new HashMap<>();


    public Map<String, Object> getStore() {
        return store;
    }

    public void setStore(Map<String, Object> store) {
        this.store = store;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    /*public List<EpenMenuCategory> getMenu() {
        return (List<EpenMenuCategory>) store.get(Constants.REST_SESSION_KEY_MENU);
    }

    public void setMenu(List<EpenMenuCategory> menu) {
        store.put(Constants.REST_SESSION_KEY_MENU, menu);
    }
*/
    public String getCurrentTask() {
        return currentTask;
    }

    public void setCurrentTask(String currentTask) {
        this.currentTask = currentTask;
    }

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    public String toString() {
        return "RestSessionBeanImpl [userId=" + userId + ", loginId=" + loginId + ", sessionId=" + sessionId
                + ", currentTask=" + currentTask + "]";
    }

    public Date getLastTouchTime() {
        return lastTouchTime;
    }

    public void setLastTouchTime(Date lastTouchTime) {
        this.lastTouchTime = lastTouchTime;
    }

    public String getCurrentTaskName() {
        return currentTaskName;
    }

    public void setCurrentTaskName(String currentTaskName) {
        this.currentTaskName = currentTaskName;
    }

}
