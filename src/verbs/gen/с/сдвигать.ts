import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдвигать: PerfectVerb = {
  name: Word('сдвигать', 5),
  singular1stPerson: Word('сдвигаю', 5),
  singular2ndPerson: Word('сдвигаешь', 5),
  singular3rdPerson: Word('сдвигает', 5),
  plural1stPerson: Word('сдвигаем', 5),
  plural2ndPerson: Word('сдвигаете', 5),
  plural3rdPerson: Word('сдвигают', 5),
  masculinePast: Word('сдвигал', 5),
  femininePast: Word('сдвигала', 5),
  neuterPast: Word('сдвигало', 5),
  pluralPast: Word('сдвигали', 5),
  imperativeInformal: Word('сдвигай', 5),
  imperativeFormal: Word('сдвигайте', 5),
  imperfect: [],
};

perfectVerbs.set(сдвигать.name.text, сдвигать);

export { сдвигать };