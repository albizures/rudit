import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растаять: PerfectVerb = {
  name: Word('растаять', 4),
  singular1stPerson: Word('растаю', 4),
  singular2ndPerson: Word('растаешь', 4),
  singular3rdPerson: Word('растает', 4),
  plural1stPerson: Word('растаем', 4),
  plural2ndPerson: Word('растаете', 4),
  plural3rdPerson: Word('растают', 4),
  masculinePast: Word('растаял', 4),
  femininePast: Word('растаяла', 4),
  neuterPast: Word('растаяло', 4),
  pluralPast: Word('растаяли', 4),
  imperativeInformal: Word('растай', 4),
  imperativeFormal: Word('растайте', 4),
  imperfect: [],
};

perfectVerbs.set(растаять.name.text, растаять);

export { растаять };