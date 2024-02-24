import {DonutChart , Legend} from '@tremor/react';





type  DonutProps = {
    title: string,
    data:[{
        name: string,
        value: number,
        color: string
    }]
}
export const DonutChartHero = (props: DonutProps) =>{
    const {title,data} = props;
    const donutData = data.map(data => {
        return {
            name: data.name,
            value: Number(data.value)
        }
    })
    const colors = data.map(data => {
        return data.color
    })
    const categories = data.map(data => {
        return data.name
    })
    console.log(colors)
    return(
        <div className="mx-auto space-y-12 mt-4">
            <div className="space-y-3">
                <div className="flex justify-center">
                    <DonutChart
                        data={donutData}
                        category="value"
                        variant="donut"
                        onValueChange={(v) => console.log(v)}
                        colors={colors}
                        index="name"
                    />
                </div>
            </div>
                <div className="mx-auto max-w-md grid grid-cols-2">
                    {
                        data.map(data => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className="flex justify-start items-center gap-5 px-6">
                                    <div
                                        className={`flex w-1.5 h-1.5 flex-col bg-${data.color}-400 rounded`}
                                    />
                                    <p>{data.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
)};

type CustomTooltipTypeDonut = { payload: any;    active: boolean | undefined;    label: any;  };
const customTooltip = (props: CustomTooltipTypeDonut) => {
    const {payload , active} = props;
    if (!active || !payload) return null;
    const categoryPayload = payload?.[0];
    if (!categoryPayload) return null;
    return (
    <div
        className="w-56 rounded-sm fill-amber-50 p-2 shadow-sm">
        <div className="flex flex-1 space-x-2.5">
            <div
                className={`flex w-1.5 flex-col bg-${categoryPayload?.color}-400 rounded`}
            />
            <div className="w-full">
                <div className="flex items-center justify-between space-x-8">
                    <p className="whitespace-nowrap text-right text-tremor-content">
                        {categoryPayload.name}
                    </p>
                    <p className="whitespace-nowrap text-right font-medium text-tremor-content-emphasis">
                        {categoryPayload.value}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )}
