module.exports = {
'roles': {
	'administrator': {
		'name': 'administrator',
		'permissions': []
	},
	'authenticated': {
		'name': 'authenticated',
		'permissions': [
			'find_image',
			'upload_image',
			'find_user',
			'find_page',
			'find_comment',
			'create_comment',
			'find_term',
			'create_term',
			'find_activity',
			'find_vocabulary',
			'find_post',
			'create_post',
			'find_group',
			'create_group',
			'find_role',
			'use_flag',
			'use_follow',
			'use_messenger',
			'find_room',
			'create_room'
		],
		'isSystemRole': true
	},
	'unAuthenticated': {
		'name': 'unAuthenticated',
		'permissions': [
			'find_image',
			'find_user',
			'find_page',
			'find_comment',
			'find_term',
			'find_activity',
			'find_vocabulary',
			'find_post',
			'find_group',
			'find_role',
			'find_room'
		],
		'isSystemRole': true
	},
	'owner': {
		'name': 'owner',
		'permissions': [
			'crop_image',
			'delete_image',
			'update_page',
			'delete_page',
			'update_comment',
			'delete_comment',
			'update_term',
			'delete_term',
			'delete_vocabulary',
			'update_vocabulary',
			'update_post',
			'delete_post',
			'update_group',
			'delete_group',
			'update_user',
			'delete_user',
			'update_room',
			'delete_room'
		],
		'isSystemRole': true
	}
}
};
