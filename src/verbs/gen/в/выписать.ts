import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выписать: PerfectVerb = {
  name: Word('выписать', 1),
  singular1stPerson: Word('выпишу', 1),
  singular2ndPerson: Word('выпишешь', 1),
  singular3rdPerson: Word('выпишет', 1),
  plural1stPerson: Word('выпишем', 1),
  plural2ndPerson: Word('выпишете', 1),
  plural3rdPerson: Word('выпишут', 1),
  masculinePast: Word('выписал', 1),
  femininePast: Word('выписала', 1),
  neuterPast: Word('выписало', 1),
  pluralPast: Word('выписали', 1),
  imperativeInformal: Word('выпиши', 1),
  imperativeFormal: Word('выпишите', 1),
  imperfect: [],
};

perfectVerbs.set(выписать.name.text, выписать);

export { выписать };