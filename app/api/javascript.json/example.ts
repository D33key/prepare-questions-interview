import { type NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
	// Get query parameters
	const searchParams = request.nextUrl.searchParams;
	const page = Number.parseInt(searchParams.get('page') || '1');
	const limit = Number.parseInt(searchParams.get('limit') || '5');

	// Calculate pagination values
	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	try {
		// Read the data.json file
		const filePath = path.join(process.cwd(), 'public', 'data.json');
		const fileContents = fs.readFileSync(filePath, 'utf8');
		const data = JSON.parse(fileContents);

		// Get paginated results
		const results = data.slice(startIndex, endIndex);

		// Create pagination info
		const pagination = {
			total: data.length,
			totalPages: Math.ceil(data.length / limit),
			currentPage: page,
			limit: limit,
			hasNextPage: endIndex < data.length,
			hasPrevPage: startIndex > 0,
		};

		// Return paginated data and pagination info
		return NextResponse.json({
			success: true,
			pagination,
			data: results,
		});
	} catch (error) {
		console.error('Error reading data file:', error);
		return NextResponse.json(
			{ success: false, message: 'Failed to fetch data' },
			{ status: 500 },
		);
	}
}
