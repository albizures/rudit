import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тюкать: PerfectVerb = {
  name: Word('тюкать', 1),
  singular1stPerson: Word('тюкаю', 1),
  singular2ndPerson: Word('тюкаешь', 1),
  singular3rdPerson: Word('тюкает', 1),
  plural1stPerson: Word('тюкаем', 1),
  plural2ndPerson: Word('тюкаете', 1),
  plural3rdPerson: Word('тюкают', 1),
  masculinePast: Word('тюкал', 1),
  femininePast: Word('тюкала', 1),
  neuterPast: Word('тюкало', 1),
  pluralPast: Word('тюкали', 1),
  imperativeInformal: Word('тюкай', 1),
  imperativeFormal: Word('тюкайте', 1),
  imperfect: [],
};

perfectVerbs.set(тюкать.name.text, тюкать);

export { тюкать };