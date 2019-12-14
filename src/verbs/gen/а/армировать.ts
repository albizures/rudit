import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const армировать: PerfectVerb = {
  name: Word('армировать', 3),
  singular1stPerson: Word('армирую', 3),
  singular2ndPerson: Word('армируешь', 3),
  singular3rdPerson: Word('армирует', 3),
  plural1stPerson: Word('армируем', 3),
  plural2ndPerson: Word('армируете', 3),
  plural3rdPerson: Word('армируют', 3),
  masculinePast: Word('армировал', 3),
  femininePast: Word('армировала', 3),
  neuterPast: Word('армировало', 3),
  pluralPast: Word('армировали', 3),
  imperativeInformal: Word('армируй', 3),
  imperativeFormal: Word('армируйте', 3),
  imperfect: [],
};

perfectVerbs.set(армировать.name.text, армировать);

export { армировать };