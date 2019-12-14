import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const резервировать: PerfectVerb = {
  name: Word('резервировать', 6),
  singular1stPerson: Word('резервирую', 6),
  singular2ndPerson: Word('резервируешь', 6),
  singular3rdPerson: Word('резервирует', 6),
  plural1stPerson: Word('резервируем', 6),
  plural2ndPerson: Word('резервируете', 6),
  plural3rdPerson: Word('резервируют', 6),
  masculinePast: Word('резервировал', 6),
  femininePast: Word('резервировала', 6),
  neuterPast: Word('резервировало', 6),
  pluralPast: Word('резервировали', 6),
  imperativeInformal: Word('резервируй', 6),
  imperativeFormal: Word('резервируйте', 6),
  imperfect: [],
};

perfectVerbs.set(резервировать.name.text, резервировать);

export { резервировать };