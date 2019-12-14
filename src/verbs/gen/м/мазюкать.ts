import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мазюкать: PerfectVerb = {
  name: Word('мазюкать', 3),
  singular1stPerson: Word('мазюкаю', 3),
  singular2ndPerson: Word('мазюкаешь', 3),
  singular3rdPerson: Word('мазюкает', 3),
  plural1stPerson: Word('мазюкаем', 3),
  plural2ndPerson: Word('мазюкаете', 3),
  plural3rdPerson: Word('мазюкают', 3),
  masculinePast: Word('мазюкал', 3),
  femininePast: Word('мазюкала', 3),
  neuterPast: Word('мазюкало', 3),
  pluralPast: Word('мазюкали', 3),
  imperativeInformal: Word('мазюкай', 3),
  imperativeFormal: Word('мазюкайте', 3),
  imperfect: [],
};

perfectVerbs.set(мазюкать.name.text, мазюкать);

export { мазюкать };