import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздвигать: PerfectVerb = {
  name: Word('раздвигать', 7),
  singular1stPerson: Word('раздвигаю', 7),
  singular2ndPerson: Word('раздвигаешь', 7),
  singular3rdPerson: Word('раздвигает', 7),
  plural1stPerson: Word('раздвигаем', 7),
  plural2ndPerson: Word('раздвигаете', 7),
  plural3rdPerson: Word('раздвигают', 7),
  masculinePast: Word('раздвигал', 7),
  femininePast: Word('раздвигала', 7),
  neuterPast: Word('раздвигало', 7),
  pluralPast: Word('раздвигали', 7),
  imperativeInformal: Word('раздвигай', 7),
  imperativeFormal: Word('раздвигайте', 7),
  imperfect: [],
};

perfectVerbs.set(раздвигать.name.text, раздвигать);

export { раздвигать };