package infera.backend.ragaas.services;

import org.springframework.stereotype.Service;

import infera.backend.ragaas.dtos.LoginUserRequestDto;
import infera.backend.ragaas.dtos.LoginUserResponseDto;
import infera.backend.ragaas.entities.UserEntity;
import infera.backend.ragaas.repositories.UserRepository;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.crypto.password.PasswordEncoder;
import jakarta.transaction.Transactional;

@Service
public class LoginUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    // constructor
    public LoginUserService(UserRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Transactional
    public LoginUserResponseDto loginUser(LoginUserRequestDto loginUserRequestDto) {
        // tentative values (what the user gives us)
        String requestEmail = loginUserRequestDto.email();
        String requestPassword = loginUserRequestDto.password();

        // if there are no database entries with that email,
        // throw error and retur failed loginUserResponseDto
        if (!doesAccountExist(requestEmail)) {
            throw new IllegalArgumentException("account does not exist");
        }

        // given that the email is in the database, if the password is wrong,
        // throw error and return failed loginUserResponseDto
        if (!doesPasswordMatch(requestEmail, requestPassword)) {
            throw new IllegalArgumentException("passwords do not match");
        }

        // the login info is correct,
        // extract the user entity and do some updates to metadata
        UserEntity userAccount = userRepository.findByEmail(requestEmail)
                .orElseThrow(() -> new RuntimeException("couldnt fetch account"));
        userAccount.setLastLogin(LocalDateTime.now());
        userRepository.save(userAccount);

        // construct user details map
        Map<String, Object> userDetails = new HashMap<>();
        userDetails.put("username", userAccount.getUsername());
        userDetails.put("userId", userAccount.getId());
        userDetails.put("email", userAccount.getEmail());

        String token = jwtService.generateJwtToken(userDetails);

        // return loginUserResponseDto with fields
        LoginUserResponseDto loginUserResponseDto = new LoginUserResponseDto(
                token,
                userAccount.getUsername(),
                "Bearer",
                jwtService.getExpirationTime(),
                userAccount.getEmail(),
                "login successful");

        return loginUserResponseDto;
    }

    // ------------------------------------------------------------------------------
    // UTILITY FUNCTIONS
    // ------------------------------------------------------------------------------
    private boolean doesAccountExist(String email) {
        return userRepository.existsByEmail(email);
    }

    private boolean doesPasswordMatch(String email, String password) {
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("user does not exist"));
        String hashedExistingUserPassword = user.getPassword();
        return passwordEncoder.matches(password, hashedExistingUserPassword);
    }
}
