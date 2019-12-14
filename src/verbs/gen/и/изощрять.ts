import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изощрять: PerfectVerb = {
  name: Word('изощрять', 5),
  singular1stPerson: Word('изощряю', 5),
  singular2ndPerson: Word('изощряешь', 5),
  singular3rdPerson: Word('изощряет', 5),
  plural1stPerson: Word('изощряем', 5),
  plural2ndPerson: Word('изощряете', 5),
  plural3rdPerson: Word('изощряют', 5),
  masculinePast: Word('изощрял', 5),
  femininePast: Word('изощряла', 5),
  neuterPast: Word('изощряло', 5),
  pluralPast: Word('изощряли', 5),
  imperativeInformal: Word('изощряй', 5),
  imperativeFormal: Word('изощряйте', 5),
  imperfect: [],
};

perfectVerbs.set(изощрять.name.text, изощрять);

export { изощрять };