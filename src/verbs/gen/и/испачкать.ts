import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испачкать: PerfectVerb = {
  name: Word('испачкать', 3),
  singular1stPerson: Word('испачкаю', 3),
  singular2ndPerson: Word('испачкаешь', 3),
  singular3rdPerson: Word('испачкает', 3),
  plural1stPerson: Word('испачкаем', 3),
  plural2ndPerson: Word('испачкаете', 3),
  plural3rdPerson: Word('испачкают', 3),
  masculinePast: Word('испачкал', 3),
  femininePast: Word('испачкала', 3),
  neuterPast: Word('испачкало', 3),
  pluralPast: Word('испачкали', 3),
  imperativeInformal: Word('испачкай', 3),
  imperativeFormal: Word('испачкайте', 3),
  imperfect: [],
};

perfectVerbs.set(испачкать.name.text, испачкать);

export { испачкать };