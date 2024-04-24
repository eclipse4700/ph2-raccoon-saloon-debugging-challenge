import RaccoonCard from './RaccoonCard'
// delete the import

function RaccoonsContainer({ raccoonsArr, audioOn }) {

    const mappedRaccoons = raccoonsArr.map(raccoon => <RaccoonCard key={raccoon.id} raccoon={raccoon} audioOn={audioOn} />)
    // const mappedRaccoons = raccoonsArr.map(<RaccoonCard raccoon={raccoon} audioOn={audioOn} />)

    return (
        <div>

        { mappedRaccoons }

        </div>
    )

}

export default RaccoonsContainer