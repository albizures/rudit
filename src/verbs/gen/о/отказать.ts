import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отказать: PerfectVerb = {
  name: Word('отказать', 5),
  singular1stPerson: Word('откажу', 5),
  singular2ndPerson: Word('откажешь', 3),
  singular3rdPerson: Word('откажет', 3),
  plural1stPerson: Word('откажем', 3),
  plural2ndPerson: Word('откажете', 3),
  plural3rdPerson: Word('откажут', 3),
  masculinePast: Word('отказал', 5),
  femininePast: Word('отказала', 5),
  neuterPast: Word('отказало', 5),
  pluralPast: Word('отказали', 5),
  imperativeInformal: Word('откажи', 5),
  imperativeFormal: Word('откажите', 5),
  imperfect: [],
};

perfectVerbs.set(отказать.name.text, отказать);

export { отказать };