import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрягать: PerfectVerb = {
  name: Word('спрягать', 5),
  singular1stPerson: Word('спрягаю', 5),
  singular2ndPerson: Word('спрягаешь', 5),
  singular3rdPerson: Word('спрягает', 5),
  plural1stPerson: Word('спрягаем', 5),
  plural2ndPerson: Word('спрягаете', 5),
  plural3rdPerson: Word('спрягают', 5),
  masculinePast: Word('спрягал', 5),
  femininePast: Word('спрягала', 5),
  neuterPast: Word('спрягало', 5),
  pluralPast: Word('спрягали', 5),
  imperativeInformal: Word('спрягай', 5),
  imperativeFormal: Word('спрягайте', 5),
  imperfect: ['проспрягать'],
};

perfectVerbs.set(спрягать.name.text, спрягать);

export { спрягать };