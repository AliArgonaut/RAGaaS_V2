
package infera.backend.ragaas.controllers;

import infera.backend.ragaas.dtos.CreateUserRequestDto;
import infera.backend.ragaas.dtos.CreateUserResponseDto;
import infera.backend.ragaas.services.CreateUserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/v1/api/accounts")
public class CreateAccountController {

    private final CreateUserService createUserService;

    public CreateAccountController(CreateUserService createUserService) {
        this.createUserService = createUserService;
    }

    @PostMapping("/create")
    public ResponseEntity<CreateUserResponseDto> createAccount(
            @Valid @RequestBody CreateUserRequestDto createUserRequestDto) {

        CreateUserResponseDto response = createUserService.createUser(createUserRequestDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/check-username/{username}")
    public ResponseEntity<Map<String, Boolean>> checkUsernameAvailability(
            @PathVariable String username) {

        return ResponseEntity.ok(
                Map.of("available", createUserService.isUsernameAvailable(username)));
    }

    @GetMapping("/check-email/{email}")
    public ResponseEntity<Map<String, Boolean>> checkEmailAvailability(
            @PathVariable String email) {

        return ResponseEntity.ok(
                Map.of("available", createUserService.isEmailAvailable(email)));
    }
}
