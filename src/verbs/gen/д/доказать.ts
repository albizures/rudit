import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доказать: PerfectVerb = {
  name: Word('доказать', 5),
  singular1stPerson: Word('докажу', 5),
  singular2ndPerson: Word('докажешь', 3),
  singular3rdPerson: Word('докажет', 3),
  plural1stPerson: Word('докажем', 3),
  plural2ndPerson: Word('докажете', 3),
  plural3rdPerson: Word('докажут', 3),
  masculinePast: Word('доказал', 5),
  femininePast: Word('доказала', 5),
  neuterPast: Word('доказало', 5),
  pluralPast: Word('доказали', 5),
  imperativeInformal: Word('докажи', 5),
  imperativeFormal: Word('докажите', 5),
  imperfect: ['доказывать'],
};

perfectVerbs.set(доказать.name.text, доказать);

export { доказать };