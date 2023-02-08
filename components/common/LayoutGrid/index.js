import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	grid-column-gap: 16px;
	align-items: start;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}
`;

const LayoutGrid = (props) => <Grid className="grid">{props.children}</Grid>;

export default LayoutGrid;
