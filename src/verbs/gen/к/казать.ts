import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const казать: PerfectVerb = {
  name: Word('казать', 3),
  singular1stPerson: Word('кажу', 3),
  singular2ndPerson: Word('кажешь', 1),
  singular3rdPerson: Word('кажет', 1),
  plural1stPerson: Word('кажем', 1),
  plural2ndPerson: Word('кажете', 1),
  plural3rdPerson: Word('кажут', 1),
  masculinePast: Word('казал', 3),
  femininePast: Word('казала', 3),
  neuterPast: Word('казало', 3),
  pluralPast: Word('казали', 3),
  imperativeInformal: Word('кажи', 3),
  imperativeFormal: Word('кажите', 3),
  imperfect: [],
};

perfectVerbs.set(казать.name.text, казать);

export { казать };