package infera.backend.ragaas.controllers;

import infera.backend.ragaas.dtos.CreateUserDto;
import infera.backend.ragaas.services.CreateUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/accounts")
public class CreateAccountController {

    private final CreateUserService createUserService;

    public CreateAccountController(CreateUserService createUserService) {
        this.createUserService = createUserService;
    }

    @PostMapping("/create")
    public ResponseEntity<Map<String, Object>> createAccount(@Valid @RequestBody CreateUserDto createUserDto) {
        try {
            var user = createUserService.createUser(createUserDto);

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Account created successfully");
            response.put("userId", user.getId());
            response.put("username", user.getUsername());

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (IllegalArgumentException e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", e.getMessage());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);

        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "An error occurred during account creation");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/check-username/{username}")
    public ResponseEntity<Map<String, Boolean>> checkUsernameAvailability(@PathVariable String username) {
        boolean isAvailable = createUserService.isUsernameAvailable(username);

        Map<String, Boolean> response = new HashMap<>();
        response.put("available", isAvailable);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/check-email/{email}")
    public ResponseEntity<Map<String, Boolean>> checkEmailAvailability(@PathVariable String email) {
        boolean isAvailable = createUserService.isEmailAvailable(email);

        Map<String, Boolean> response = new HashMap<>();
        response.put("available", isAvailable);

        return ResponseEntity.ok(response);
    }
}
