package infera.backend.ragaas.services;

import org.springframework.stereotype.Service;

import infera.backend.ragaas.dtos.LoginUserRequestDto;
import infera.backend.ragaas.entities.UserEntity;
import infera.backend.ragaas.repositories.UserRepository;
import jakarta.transaction.Transactional;

@Service
public class LoginUserService {
    private final UserRepository userRepository;

    public LoginUserService(UserRepository repository) {
        this.userRepository = repository;
    }

    @Transactional
    public UserEntity loginUser(LoginUserRequestDto loginUserRequestDto) {
        String userEmail = loginUserRequestDto.getEmail();
        if (isEmailAvailable(loginUserRequestDto.getEmail())) {
            throw new IllegalArgumentException("email is not available");
        }

    }

    private boolean isEmailAvailable(String email) {
        if (userRepository.existsByEmail(email)) {
            return true;
        }

        return false;
    }
}
