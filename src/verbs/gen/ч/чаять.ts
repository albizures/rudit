import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чаять: PerfectVerb = {
  name: Word('чаять', 1),
  singular1stPerson: Word('чаю', 1),
  singular2ndPerson: Word('чаешь', 1),
  singular3rdPerson: Word('чает', 1),
  plural1stPerson: Word('чаем', 1),
  plural2ndPerson: Word('чаете', 1),
  plural3rdPerson: Word('чают', 1),
  masculinePast: Word('чаял', 1),
  femininePast: Word('чаяла', 1),
  neuterPast: Word('чаяло', 1),
  pluralPast: Word('чаяли', 1),
  imperativeInformal: Word('чай', 1),
  imperativeFormal: Word('чайте', 1),
  imperfect: [],
};

perfectVerbs.set(чаять.name.text, чаять);

export { чаять };