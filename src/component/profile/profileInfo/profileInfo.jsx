import React from 'react';
import './profileInfo.css';

let ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-italy-cinque-terre-santa-margherita-00-index-1541710953.jpg" className="content-img" alt="contentPhoto" />
			</div>
			<div className="second-content">
				<div>
					<img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg" className="content-img-dog" alt="contentPhoto-Dog" />
				</div>
				<div className="third-content">
					<p className="person">Dmitry k.</p>
					<div>Data of Birth: 2 January</div>
					<div>City:Minsk</div>
					<div>Education: BSU'11</div>
					<div>Web Syte: https://www.youtube.com/watch?v=t6rAzhi3vjQ</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;