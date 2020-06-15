export async function multipleChecks () {
  // The imports _need_ to be done within this async function
  // picked up by the imports resolver Danger uses with remote
  const {checkLabel} = await import("./label")
  const {checkMilestone} = await import("./milestone")

  await checkLabel()
  await checkMilestone()
}

export default multipleChecks

