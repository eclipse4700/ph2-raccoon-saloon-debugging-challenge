
function RaccoonsContainer({ raccoonsArr, audioOn }) {

    const mappedRaccoons = raccoonsArr.map(<RaccoonCard raccoon={raccoon} audioOn={audioOn} />)

    return (
        <div>

        { mappedRaccoons }

        </div>
    )

}

export default RaccoonsContainer