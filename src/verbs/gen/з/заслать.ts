import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслать: PerfectVerb = {
  name: Word('заслать', 4),
  singular1stPerson: Word('зашлю', 4),
  singular2ndPerson: Word('зашлёшь', 1),
  singular3rdPerson: Word('зашлёт', 1),
  plural1stPerson: Word('зашлём', 1),
  plural2ndPerson: Word('зашлёте', 1),
  plural3rdPerson: Word('зашлют', 4),
  masculinePast: Word('заслал', 4),
  femininePast: Word('заслала', 4),
  neuterPast: Word('заслало', 4),
  pluralPast: Word('заслали', 4),
  imperativeInformal: Word('зашли', 4),
  imperativeFormal: Word('зашлите', 4),
  imperfect: [],
};

perfectVerbs.set(заслать.name.text, заслать);

export { заслать };