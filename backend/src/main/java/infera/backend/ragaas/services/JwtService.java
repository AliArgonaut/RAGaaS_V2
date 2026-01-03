// this is jwt service. 
// it is used by LoginUserService. 
// It is not connected to any controllers.
package infera.backend.ragaas.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;

import java.util.Map;

import javax.crypto.SecretKey;

import java.util.Date;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String jwtSecret;

    private long jwtExpirationTime = 86400000;

    private SecretKey key;

    @PostConstruct
    public void init() {
        if (jwtSecret == null || jwtSecret.length() < 32) {
            throw new IllegalStateException("jwt secret is invalid, not present, or too short");
        }
        this.key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    public String generateJwtToken(Map<String, Object> userDetails) {
        Date now = new Date();
        Date expireDate = new Date(now.getTime() + jwtExpirationTime);
        return Jwts.builder()
                .claims(userDetails)
                .signWith(key)
                .issuedAt(now)
                .expiration(expireDate)
                .compact();

    }

    public long getExpirationTime() {
        return jwtExpirationTime;
    }

}
