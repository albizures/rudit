import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжигать: PerfectVerb = {
  name: Word('сжигать', 4),
  singular1stPerson: Word('сжигаю', 4),
  singular2ndPerson: Word('сжигаешь', 4),
  singular3rdPerson: Word('сжигает', 4),
  plural1stPerson: Word('сжигаем', 4),
  plural2ndPerson: Word('сжигаете', 4),
  plural3rdPerson: Word('сжигают', 4),
  masculinePast: Word('сжигал', 4),
  femininePast: Word('сжигала', 4),
  neuterPast: Word('сжигало', 4),
  pluralPast: Word('сжигали', 4),
  imperativeInformal: Word('сжигай', 4),
  imperativeFormal: Word('сжигайте', 4),
  imperfect: ['сжечь'],
};

perfectVerbs.set(сжигать.name.text, сжигать);

export { сжигать };