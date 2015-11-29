package com.trinity.datascience.exception;

import com.trinity.datascience.domain.auth.AuthStatus;
import org.springframework.stereotype.Component;

@Component
public class AuthorizationServiceException extends RuntimeException {

    private static final long serialVersionUID = 8956742604310265609L;
    private AuthStatus authStatus = null;

    public AuthorizationServiceException() {
        super();
    }

    public AuthorizationServiceException(final Exception nestedException) {
        super(nestedException);
    }

    public AuthorizationServiceException(final String message) {
        super(message);
    }

    public AuthorizationServiceException(final String message, final Exception nestedException) {
        super(message, nestedException);
    }

    public AuthStatus getAuthStatus() {
        return authStatus;
    }

    public void setAuthStatus(AuthStatus authStatus) {
        this.authStatus = authStatus;
    }

}
