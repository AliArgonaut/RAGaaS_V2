package infera.backend.ragaas.services;

import infera.backend.ragaas.dtos.CreateUserDto;
import infera.backend.ragaas.entities.UserEntity;
import infera.backend.ragaas.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CreateUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public CreateUserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public UserEntity createUser(CreateUserDto createUserDto) {
        validateUserData(createUserDto);

        if (!isUsernameAvailable(createUserDto.getUsername())) {
            throw new IllegalArgumentException("Username is already taken");
        }

        if (!isEmailAvailable(createUserDto.getEmail())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        UserEntity user = new UserEntity();
        user.setUsername(createUserDto.getUsername());
        user.setEmail(createUserDto.getEmail());
        user.setPassword(passwordEncoder.encode(createUserDto.getPassword()));
        user.setCreatedAt(LocalDateTime.now());
        user.setEnabled(true);

        return userRepository.save(user);
    }

    public boolean isUsernameAvailable(String username) {
        return !userRepository.existsByUsername(username);
    }

    public boolean isEmailAvailable(String email) {
        return !userRepository.existsByEmail(email);
    }

    public Optional<UserEntity> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<UserEntity> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<UserEntity> findById(Long id) {
        return userRepository.findById(id);
    }

    private void validateUserData(CreateUserDto createUserDto) {
        if (createUserDto.getUsername() == null || createUserDto.getUsername().trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be empty");
        }

        if (createUserDto.getEmail() == null || createUserDto.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be empty");
        }

        if (createUserDto.getPassword() == null || createUserDto.getPassword().length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters long");
        }

        if (!isValidEmail(createUserDto.getEmail())) {
            throw new IllegalArgumentException("Invalid email format");
        }

        if (createUserDto.getUsername().length() < 3 || createUserDto.getUsername().length() > 50) {
            throw new IllegalArgumentException("Username must be between 3 and 50 characters");
        }
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
        return email.matches(emailRegex);
    }
}
