export async function multipleChecks () {
  // The imports _need_ to be done within this async function
  // picked up by the imports resolver Danger uses with remote
  const {textDiff} = await import("./text-diff")

  await textDiff()
}

export default multipleChecks

