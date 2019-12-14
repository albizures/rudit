import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const списать: PerfectVerb = {
  name: Word('списать', 4),
  singular1stPerson: Word('спишу', 4),
  singular2ndPerson: Word('спишешь', 2),
  singular3rdPerson: Word('спишет', 2),
  plural1stPerson: Word('спишем', 2),
  plural2ndPerson: Word('спишете', 2),
  plural3rdPerson: Word('спишут', 2),
  masculinePast: Word('списал', 4),
  femininePast: Word('списала', 4),
  neuterPast: Word('списало', 4),
  pluralPast: Word('списали', 4),
  imperativeInformal: Word('спиши', 4),
  imperativeFormal: Word('спишите', 4),
  imperfect: [],
};

perfectVerbs.set(списать.name.text, списать);

export { списать };