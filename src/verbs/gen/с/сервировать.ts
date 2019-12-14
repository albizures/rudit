import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сервировать: PerfectVerb = {
  name: Word('сервировать', 8),
  singular1stPerson: Word('сервирую', 6),
  singular2ndPerson: Word('сервируешь', 6),
  singular3rdPerson: Word('сервирует', 6),
  plural1stPerson: Word('сервируем', 6),
  plural2ndPerson: Word('сервируете', 6),
  plural3rdPerson: Word('сервируют', 6),
  masculinePast: Word('сервировал', 8),
  femininePast: Word('сервировала', 8),
  neuterPast: Word('сервировало', 8),
  pluralPast: Word('сервировали', 8),
  imperativeInformal: Word('сервируй', 6),
  imperativeFormal: Word('сервируйте', 6),
  imperfect: [],
};

perfectVerbs.set(сервировать.name.text, сервировать);

export { сервировать };