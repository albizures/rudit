import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рявкать: PerfectVerb = {
  name: Word('рявкать', 1),
  singular1stPerson: Word('рявкаю', 1),
  singular2ndPerson: Word('рявкаешь', 1),
  singular3rdPerson: Word('рявкает', 1),
  plural1stPerson: Word('рявкаем', 1),
  plural2ndPerson: Word('рявкаете', 1),
  plural3rdPerson: Word('рявкают', 1),
  masculinePast: Word('рявкал', 1),
  femininePast: Word('рявкала', 1),
  neuterPast: Word('рявкало', 1),
  pluralPast: Word('рявкали', 1),
  imperativeInformal: Word('рявкай', 1),
  imperativeFormal: Word('рявкайте', 1),
  imperfect: [],
};

perfectVerbs.set(рявкать.name.text, рявкать);

export { рявкать };