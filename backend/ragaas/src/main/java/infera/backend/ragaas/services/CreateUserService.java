package infera.backend.ragaas.services;

import infera.backend.ragaas.dtos.CreateUserRequestDto;
import infera.backend.ragaas.dtos.CreateUserResponseDto;
import infera.backend.ragaas.entities.UserEntity;
import infera.backend.ragaas.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class CreateUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public CreateUserService(UserRepository userRepository,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public CreateUserResponseDto createUser(CreateUserRequestDto request) {
        validateUserData(request);

        if (!isUsernameAvailable(request.getUsername())) {
            throw new IllegalArgumentException("Username is already taken");
        }

        if (!isEmailAvailable(request.getEmail())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        UserEntity user = new UserEntity();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setCreatedAt(LocalDateTime.now());
        user.setEnabled(true);

        UserEntity savedUser = userRepository.save(user);

        return new CreateUserResponseDto(
                savedUser.getId(),
                savedUser.getUsername(),
                savedUser.getEmail());
    }

    public boolean isUsernameAvailable(String username) {
        return !userRepository.existsByUsername(username);
    }

    public boolean isEmailAvailable(String email) {
        return !userRepository.existsByEmail(email);
    }

    // ------------------ Validation Utils ------------------

    private void validateUserData(CreateUserRequestDto request) {
        if (request.getUsername() == null || request.getUsername().trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be empty");
        }

        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be empty");
        }

        if (request.getPassword() == null || request.getPassword().length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters long");
        }

        if (!isValidEmail(request.getEmail())) {
            throw new IllegalArgumentException("Invalid email format");
        }

        if (request.getUsername().length() < 3 || request.getUsername().length() > 50) {
            throw new IllegalArgumentException("Username must be between 3 and 50 characters");
        }
    }

    private boolean isValidEmail(String email) {
        return email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$");
    }
}
