import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпрягать: PerfectVerb = {
  name: Word('отпрягать', 6),
  singular1stPerson: Word('отпрягаю', 6),
  singular2ndPerson: Word('отпрягаешь', 6),
  singular3rdPerson: Word('отпрягает', 6),
  plural1stPerson: Word('отпрягаем', 6),
  plural2ndPerson: Word('отпрягаете', 6),
  plural3rdPerson: Word('отпрягают', 6),
  masculinePast: Word('отпрягал', 6),
  femininePast: Word('отпрягала', 6),
  neuterPast: Word('отпрягало', 6),
  pluralPast: Word('отпрягали', 6),
  imperativeInformal: Word('отпрягай', 6),
  imperativeFormal: Word('отпрягайте', 6),
  imperfect: [],
};

perfectVerbs.set(отпрягать.name.text, отпрягать);

export { отпрягать };