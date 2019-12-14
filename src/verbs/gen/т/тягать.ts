import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тягать: PerfectVerb = {
  name: Word('тягать', 3),
  singular1stPerson: Word('тягаю', 3),
  singular2ndPerson: Word('тягаешь', 3),
  singular3rdPerson: Word('тягает', 3),
  plural1stPerson: Word('тягаем', 3),
  plural2ndPerson: Word('тягаете', 3),
  plural3rdPerson: Word('тягают', 3),
  masculinePast: Word('тягал', 3),
  femininePast: Word('тягала', 3),
  neuterPast: Word('тягало', 3),
  pluralPast: Word('тягали', 3),
  imperativeInformal: Word('тягай', 3),
  imperativeFormal: Word('тягайте', 3),
  imperfect: [],
};

perfectVerbs.set(тягать.name.text, тягать);

export { тягать };