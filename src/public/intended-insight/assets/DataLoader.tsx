import cdc from '../../../../public/intended-insight/assets/charts/cdc.jpg';
import who from '../../../../public/intended-insight/assets/charts/who.jpg';
import covidnet from '../../../../public/intended-insight/assets/charts/covidnet.jpg';
import wapo from '../../../../public/intended-insight/assets/charts/wapo.jpg';
import map from '../../../../public/intended-insight/assets/charts/map.png';

export default {
  cdc: {
    image: cdc,
    title:
      'COVID-19 infections associated with large public gatherings, by date of specimen collection and vaccination status—Barnstable County, MA, July 2021',
    source:
      'Morbidity and Mortality Weekly Report (MMWR), report published by the Center for Disease Control and Prevention (CDC).',
    warning:
      'We cannot make determinations about the efficacy of vaccines because the base rate of vaccination in the population is unknown.',
    counter:
      'As more people get vaccinated, it is more likely that the majority of cases would be among the vaccinated.',
    guide:
      'This chart tracks the surge of COVID-19 cases after big summer events in Barnstable County. It highlights how quickly the Delta variant spread and reinforces why precautions like masking were still important, even in highly vaccinated communities.',
    intended:
      'Based on the chart above, cases may quickly rise following large gatherings.',
    unintended:
      'Based on the chart above, vaccinated people are more likely to get infected.',
  },
  who: {
    image: who,
    title: '',
    source:
      'Global Influenza Surveillance and Response System (GISRS), report published by the World Health Organization (WHO).',
    warning:
      'Avoid drawing causal conclusions from these data patterns, as multiple factors may influence the trends observed.',
    counter:
      'The observed drop in cases is likely a result of preventive measures in place due to COVID lockdowns.',
    guide:
      'The WHO surveillance data is collected in order to track the dominant strains of flu. This allows scientists to identify the most effective vaccine type for the season and allocate resources accordingly.',
    intended:
      'Based on the chart above, the vaccine for this season should include both A and B strains of flu as both are common.',
    unintended:
      'Based on the chart above, flu infections may have been erroneously misclassified as COVID.',
  },
  covidnet: {
    image: covidnet,
    title: '',
    source:
      '"Improving communication around vaccine breakthrough and vaccine effectiveness", presentation published by the Center for Disease Control and Prevention (CDC).',
    warning:
      'We cannot make determinations about the relative risk of contracting COVID-19 based on this chart, since the data is not normalized by vaccination prevalence in the population.',
    counter:
      'The rise in vaccinated hospitalizations primarily reflects increases in vaccine coverage and higher coverage in older adults.',
    guide:
      'This chart is from a CDC report on improving communication about vaccine effectiveness. As more people get vaccinated, it is expected that cases and hospitalizations among the vaccinated will rise despite no change in vaccine effectiveness. This highlights the need to update public communication on breakthrough cases and emphasize that they are not a reason for panic.',
    intended:
      'Based on the chart above, breakthrough cases become more common as more people get vaccinated.',
    unintended:
      'Based on the chart above, vaccines may lead to more hospitalizations.',
  },
  wapo: {
    image: wapo,
    title: '',
    source: 'Article published by The Washington Post.',
    warning:
      'Zooming out on the entire time series does not reflect recent trends in climate.',
    counter:
      'Although the climate has varied over the course of history, we are currently experiencing the fastest recorded increase in temperature.',
    guide:
      'This chart presents the most detailed reconstruction of Earth’s temperatures over the past 485 million years, revealing a history of dramatic shifts in climate before humans existed. This research provides a deeper understanding of how past environments influenced life on Earth and opens new questions about the mechanisms driving climate stability and change in the current geological stage.',
    intended:
      'Based on the chart above, climate has varied a lot over the history of the Earth.',
    unintended:
      'Based on the chart above, fears of climate change are exaggerated since it has been much hotter before.',
  },
  map: {
    image: map,
    title: 'COVID-19 Cases by State, reported through May 4, 2020',
    source:
      'COVID-19 homepage published by the Center for Disease Control and Prevention (CDC).',
    warning:
      'We cannot make determinations about the relative risk of contracting COVID-19 based on this map, since the data is not normalized by population count.',
    counter:
      'The states with most reported cases are those with higher population counts, while relative risk depends on cases per capita.',
    guide:
      'This map helps CDC officials and responders quickly identify where case numbers are highest, guiding decisions on deploying medical personnel, medication, or testing kits. It’s a tool for prioritizing support where the demand is greatest, ensuring that overwhelmed areas get the assistance they need.',
    intended:
      'Based on the chart above, more medical resources should be allocated to states colored in purple than those in yellow.',
    unintended:
      'Based on the chart above, you are more likely to contract COVID in states colored in purple than those in yellow.',
  },
};
