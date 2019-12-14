import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залаять: PerfectVerb = {
  name: Word('залаять', 3),
  singular1stPerson: Word('залаю', 3),
  singular2ndPerson: Word('залаешь', 3),
  singular3rdPerson: Word('залает', 3),
  plural1stPerson: Word('залаем', 3),
  plural2ndPerson: Word('залаете', 3),
  plural3rdPerson: Word('залают', 3),
  masculinePast: Word('залаял', 3),
  femininePast: Word('залаяла', 3),
  neuterPast: Word('залаяло', 3),
  pluralPast: Word('залаяли', 3),
  imperativeInformal: Word('залай', 3),
  imperativeFormal: Word('залайте', 3),
  imperfect: [],
};

perfectVerbs.set(залаять.name.text, залаять);

export { залаять };