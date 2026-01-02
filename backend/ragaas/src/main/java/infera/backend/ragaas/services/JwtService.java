// this is jwt service. 
// it is used by LoginUserService. 
// It is not connected to any controllers.
package infera.backend.ragaas.services;

import org.springframework.beans.factory.annotation.Value;

@Service
public class JwtService {
    private String JWTSECRET = System.getenv("JWTSECRET");

        @Value("${jwt.secret:JWTSECRET}")

}
