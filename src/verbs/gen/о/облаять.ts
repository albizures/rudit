import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облаять: PerfectVerb = {
  name: Word('облаять', 3),
  singular1stPerson: Word('облаю', 3),
  singular2ndPerson: Word('облаешь', 3),
  singular3rdPerson: Word('облает', 3),
  plural1stPerson: Word('облаем', 3),
  plural2ndPerson: Word('облаете', 3),
  plural3rdPerson: Word('облают', 3),
  masculinePast: Word('облаял', 3),
  femininePast: Word('облаяла', 3),
  neuterPast: Word('облаяло', 3),
  pluralPast: Word('облаяли', 3),
  imperativeInformal: Word('облай', 3),
  imperativeFormal: Word('облайте', 3),
  imperfect: [],
};

perfectVerbs.set(облаять.name.text, облаять);

export { облаять };