import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наказать: PerfectVerb = {
  name: Word('наказать', 5),
  singular1stPerson: Word('накажу', 5),
  singular2ndPerson: Word('накажешь', 3),
  singular3rdPerson: Word('накажет', 3),
  plural1stPerson: Word('накажем', 3),
  plural2ndPerson: Word('накажете', 3),
  plural3rdPerson: Word('накажут', 3),
  masculinePast: Word('наказал', 5),
  femininePast: Word('наказала', 5),
  neuterPast: Word('наказало', 5),
  pluralPast: Word('наказали', 5),
  imperativeInformal: Word('накажи', 5),
  imperativeFormal: Word('накажите', 5),
  imperfect: ['наказывать'],
};

perfectVerbs.set(наказать.name.text, наказать);

export { наказать };