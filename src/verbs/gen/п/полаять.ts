import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полаять: PerfectVerb = {
  name: Word('полаять', 3),
  singular1stPerson: Word('полаю', 3),
  singular2ndPerson: Word('полаешь', 3),
  singular3rdPerson: Word('полает', 3),
  plural1stPerson: Word('полаем', 3),
  plural2ndPerson: Word('полаете', 3),
  plural3rdPerson: Word('полают', 3),
  masculinePast: Word('полаял', 3),
  femininePast: Word('полаяла', 3),
  neuterPast: Word('полаяло', 3),
  pluralPast: Word('полаяли', 3),
  imperativeInformal: Word('полай', 3),
  imperativeFormal: Word('полайте', 3),
  imperfect: [],
};

perfectVerbs.set(полаять.name.text, полаять);

export { полаять };