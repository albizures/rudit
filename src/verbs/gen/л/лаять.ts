import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лаять: PerfectVerb = {
  name: Word('лаять', 1),
  singular1stPerson: Word('лаю', 1),
  singular2ndPerson: Word('лаешь', 1),
  singular3rdPerson: Word('лает', 1),
  plural1stPerson: Word('лаем', 1),
  plural2ndPerson: Word('лаете', 1),
  plural3rdPerson: Word('лают', 1),
  masculinePast: Word('лаял', 1),
  femininePast: Word('лаяла', 1),
  neuterPast: Word('лаяло', 1),
  pluralPast: Word('лаяли', 1),
  imperativeInformal: Word('лай', 1),
  imperativeFormal: Word('лайте', 1),
  imperfect: ['залаять','полаять'],
};

perfectVerbs.set(лаять.name.text, лаять);

export { лаять };