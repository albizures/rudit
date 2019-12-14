import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдвигать: PerfectVerb = {
  name: Word('вдвигать', 5),
  singular1stPerson: Word('вдвигаю', 5),
  singular2ndPerson: Word('вдвигаешь', 5),
  singular3rdPerson: Word('вдвигает', 5),
  plural1stPerson: Word('вдвигаем', 5),
  plural2ndPerson: Word('вдвигаете', 5),
  plural3rdPerson: Word('вдвигают', 5),
  masculinePast: Word('вдвигал', 5),
  femininePast: Word('вдвигала', 5),
  neuterPast: Word('вдвигало', 5),
  pluralPast: Word('вдвигали', 5),
  imperativeInformal: Word('вдвигай', 5),
  imperativeFormal: Word('вдвигайте', 5),
  imperfect: [],
};

perfectVerbs.set(вдвигать.name.text, вдвигать);

export { вдвигать };