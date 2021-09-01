package tw.com.finalproject.shellyYang.message.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Data;
import tw.com.finalproject.yumyu.Enums.ApplicationRoles;

@Data
@Entity
@Table(uniqueConstraints = {
				@UniqueConstraint(
						columnNames = {
								"ROLE",
								"USER_ID" }) })
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="USER_ID")
	private Long UserId;
	
	@Enumerated(EnumType.STRING)
	@Column(name="ROLE")
	private ApplicationRoles role;
	
	private String content;
	
	@OneToMany
	@JoinColumn
	List<ReplyMessage> replyMessage;
	
	private String createTime;

}
