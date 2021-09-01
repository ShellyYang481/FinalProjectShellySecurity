package tw.com.finalproject.shellyYang.message.dto;

import lombok.Data;

@Data
public class MessageInputData {
	
	private String id;
	
	private String role;
	
	private String message;
	
	private String content;
}
