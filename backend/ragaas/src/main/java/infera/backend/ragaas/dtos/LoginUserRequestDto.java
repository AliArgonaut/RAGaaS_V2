package infera.backend.ragaas.dtos;

import jakarta.validation.constraints.NotBlank;

public record LoginUserRequestDto(
        @NotBlank String password,
        @NotBlank String email

) {
}
