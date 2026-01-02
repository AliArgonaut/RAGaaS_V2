// this is jwt service. 
// it is used by LoginUserService. 
// It is not connected to any controllers.
package infera.backend.ragaas.services;

import org.springframework.stereotype.Service;
import java.util.Map;

@Service
public class JwtService {
    public String generateJwtToken(Map<String, Object> userDetails) {
        System.out.println(userDetails);
        return "yo";
    }

    public long getExpirationTime() {
        return 83766690;
    }

}
