import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдвигать: PerfectVerb = {
  name: Word('выдвигать', 6),
  singular1stPerson: Word('выдвигаю', 6),
  singular2ndPerson: Word('выдвигаешь', 6),
  singular3rdPerson: Word('выдвигает', 6),
  plural1stPerson: Word('выдвигаем', 6),
  plural2ndPerson: Word('выдвигаете', 6),
  plural3rdPerson: Word('выдвигают', 6),
  masculinePast: Word('выдвигал', 6),
  femininePast: Word('выдвигала', 6),
  neuterPast: Word('выдвигало', 6),
  pluralPast: Word('выдвигали', 6),
  imperativeInformal: Word('выдвигай', 6),
  imperativeFormal: Word('выдвигайте', 6),
  imperfect: [],
};

perfectVerbs.set(выдвигать.name.text, выдвигать);

export { выдвигать };