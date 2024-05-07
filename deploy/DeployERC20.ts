import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployer, owner } = await hre.getNamedAccounts()

	await hre.deployments.deploy("MockERC20", {
		from: deployer,
		args: [1000000,"MockERC20", "tRSK", owner],
		log: true,
	})
}
export default func
func.tags = ["20"]
