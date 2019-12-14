import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылетать: PerfectVerb = {
  name: Word('вылетать', 5),
  singular1stPerson: Word('вылетаю', 5),
  singular2ndPerson: Word('вылетаешь', 5),
  singular3rdPerson: Word('вылетает', 5),
  plural1stPerson: Word('вылетаем', 5),
  plural2ndPerson: Word('вылетаете', 5),
  plural3rdPerson: Word('вылетают', 5),
  masculinePast: Word('вылетал', 5),
  femininePast: Word('вылетала', 5),
  neuterPast: Word('вылетало', 5),
  pluralPast: Word('вылетали', 5),
  imperativeInformal: Word('вылетай', 5),
  imperativeFormal: Word('вылетайте', 5),
  imperfect: [],
};

perfectVerbs.set(вылетать.name.text, вылетать);

export { вылетать };