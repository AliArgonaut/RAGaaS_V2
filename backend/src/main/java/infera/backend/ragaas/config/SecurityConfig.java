package infera.backend.ragaas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new Argon2PasswordEncoder(
                16, // saltlength bytes
                32, // hashlength bytes
                2, // use 2 threads for performance
                65536, // 64mb memory to make it too computationally expensive
                4 // iterations
        );
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .csrf(csrf -> csrf
                        .disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/v1/api/accounts/create")
                        .permitAll()
                        .requestMatchers("/v1/api/accounts/login")
                        .permitAll()
                        .requestMatchers("/v1/api/accounts/check-username/**")
                        .permitAll()
                        .requestMatchers("/v1/api/accounts/check-email/**")
                        .permitAll()
                        .anyRequest()
                        .authenticated());

        return httpSecurity.build();
    }
}
