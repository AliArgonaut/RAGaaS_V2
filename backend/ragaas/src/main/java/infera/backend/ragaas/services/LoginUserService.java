package infera.backend.ragaas.services;

import org.springframework.stereotype.Service;

import infera.backend.ragaas.dtos.LoginUserRequestDto;
import infera.backend.ragaas.dtos.LoginUserResponseDto;
import infera.backend.ragaas.entities.UserEntity;
import infera.backend.ragaas.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import jakarta.transaction.Transactional;

@Service
public class LoginUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginUserService(UserRepository repository, PasswordEncoder passwordEncoder) {
        this.userRepository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public LoginUserResponseDto (LoginUserRequestDto loginUserRequestDto) {
        String requestEmail = loginUserRequestDto.email();
        if (doesAccountExist(requestEmail)) {
            if (doesPasswordMatch(requestEmail, loginUserRequestDto.password())){
                
            }
        }

     }

    private boolean doesAccountExist(String email) {
        return userRepository.existsByEmail(email);
    }

    private boolean doesPasswordMatch(String email, String password) {
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("user does not exist"));
        String hashedExistingUserPassword = user.getPassword();
        return passwordEncoder.matches(hashedExistingUserPassword, password);
    }
}
