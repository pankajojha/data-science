package com.trinity.datascience.domain;

import java.io.Serializable;

/**
 * Created by vojhapa on 10/30/15.
 */
public class AuthData implements Serializable{


    private String userId = null;
    private String ticket = null;
    private String statusCode = null;
    private String reason = null;

    public static final String STATUS_CODE_SUCCESS = "200";
    public static final String STATUS_CODE_FAILED = "401";

    public static final String STATUS_REASON_SUCCESS = "SUCCESS";
    public static final String STATUS_REASON_EXPIRED = "TICKET EXPIRED";
    public static final String STATUS_REASON_BAD_TICKET = "BAD TICKET";
    public static final String STATUS_REASON_WRONG_UIN_FOR_TICKET = "WRONG UIN FOR TICKET";
    public static final String STATUS_REASON_USER_NOT_FOR_TICKET = "WRONG USER ID FOR TICKET";


    public AuthData(String ticket, String userId){
        this.userId = userId;
        this.ticket = ticket;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setTicket(String ticket) {
        this.ticket = ticket;
    }

    public String getTicket() {
        return ticket;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
