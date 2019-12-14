import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыкать: PerfectVerb = {
  name: Word('рыкать', 1),
  singular1stPerson: Word('рыкаю', 1),
  singular2ndPerson: Word('рыкаешь', 1),
  singular3rdPerson: Word('рыкает', 1),
  plural1stPerson: Word('рыкаем', 1),
  plural2ndPerson: Word('рыкаете', 1),
  plural3rdPerson: Word('рыкают', 1),
  masculinePast: Word('рыкал', 1),
  femininePast: Word('рыкала', 1),
  neuterPast: Word('рыкало', 1),
  pluralPast: Word('рыкали', 1),
  imperativeInformal: Word('рыкай', 1),
  imperativeFormal: Word('рыкайте', 1),
  imperfect: [],
};

perfectVerbs.set(рыкать.name.text, рыкать);

export { рыкать };