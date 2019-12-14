import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрягать: PerfectVerb = {
  name: Word('выпрягать', 6),
  singular1stPerson: Word('выпрягаю', 6),
  singular2ndPerson: Word('выпрягаешь', 6),
  singular3rdPerson: Word('выпрягает', 6),
  plural1stPerson: Word('выпрягаем', 6),
  plural2ndPerson: Word('выпрягаете', 6),
  plural3rdPerson: Word('выпрягают', 6),
  masculinePast: Word('выпрягал', 6),
  femininePast: Word('выпрягала', 6),
  neuterPast: Word('выпрягало', 6),
  pluralPast: Word('выпрягали', 6),
  imperativeInformal: Word('выпрягай', 6),
  imperativeFormal: Word('выпрягайте', 6),
  imperfect: [],
};

perfectVerbs.set(выпрягать.name.text, выпрягать);

export { выпрягать };