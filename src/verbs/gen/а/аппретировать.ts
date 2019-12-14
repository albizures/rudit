import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аппретировать: PerfectVerb = {
  name: Word('аппретировать', 6),
  singular1stPerson: Word('аппретирую', 6),
  singular2ndPerson: Word('аппретируешь', 6),
  singular3rdPerson: Word('аппретирует', 6),
  plural1stPerson: Word('аппретируем', 6),
  plural2ndPerson: Word('аппретируете', 6),
  plural3rdPerson: Word('аппретируют', 6),
  masculinePast: Word('аппретировал', 6),
  femininePast: Word('аппретировала', 6),
  neuterPast: Word('аппретировало', 6),
  pluralPast: Word('аппретировали', 6),
  imperativeInformal: Word('аппретируй', 6),
  imperativeFormal: Word('аппретируйте', 6),
  imperfect: [],
};

perfectVerbs.set(аппретировать.name.text, аппретировать);

export { аппретировать };