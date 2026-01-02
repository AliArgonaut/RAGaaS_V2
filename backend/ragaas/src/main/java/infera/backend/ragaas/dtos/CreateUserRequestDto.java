package infera.backend.ragaas.dtos;

import jakarta.validation.constraints.*;

public record CreateUserRequestDto(
        @NotBlank String username,
        @NotBlank @Email String email,
        @NotBlank String password) {
}
