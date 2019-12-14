import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гравировать: PerfectVerb = {
  name: Word('гравировать', 8),
  singular1stPerson: Word('гравирую', 6),
  singular2ndPerson: Word('гравируешь', 6),
  singular3rdPerson: Word('гравирует', 6),
  plural1stPerson: Word('гравируем', 6),
  plural2ndPerson: Word('гравируете', 6),
  plural3rdPerson: Word('гравируют', 6),
  masculinePast: Word('гравировал', 8),
  femininePast: Word('гравировала', 8),
  neuterPast: Word('гравировало', 8),
  pluralPast: Word('гравировали', 8),
  imperativeInformal: Word('гравируй', 6),
  imperativeFormal: Word('гравируйте', 6),
  imperfect: [],
};

perfectVerbs.set(гравировать.name.text, гравировать);

export { гравировать };