import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внедрять: PerfectVerb = {
  name: Word('внедрять', 5),
  singular1stPerson: Word('внедряю', 5),
  singular2ndPerson: Word('внедряешь', 5),
  singular3rdPerson: Word('внедряет', 5),
  plural1stPerson: Word('внедряем', 5),
  plural2ndPerson: Word('внедряете', 5),
  plural3rdPerson: Word('внедряют', 5),
  masculinePast: Word('внедрял', 5),
  femininePast: Word('внедряла', 5),
  neuterPast: Word('внедряло', 5),
  pluralPast: Word('внедряли', 5),
  imperativeInformal: Word('внедряй', 5),
  imperativeFormal: Word('внедряйте', 5),
  imperfect: [],
};

perfectVerbs.set(внедрять.name.text, внедрять);

export { внедрять };