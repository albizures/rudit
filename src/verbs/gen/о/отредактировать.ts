import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отредактировать: PerfectVerb = {
  name: Word('отредактировать', 8),
  singular1stPerson: Word('отредактирую', 8),
  singular2ndPerson: Word('отредактируешь', 8),
  singular3rdPerson: Word('отредактирует', 8),
  plural1stPerson: Word('отредактируем', 8),
  plural2ndPerson: Word('отредактируете', 8),
  plural3rdPerson: Word('отредактируют', 8),
  masculinePast: Word('отредактировал', 8),
  femininePast: Word('отредактировала', 8),
  neuterPast: Word('отредактировало', 8),
  pluralPast: Word('отредактировали', 8),
  imperativeInformal: Word('отредактируй', 8),
  imperativeFormal: Word('отредактируйте', 8),
  imperfect: [],
};

perfectVerbs.set(отредактировать.name.text, отредактировать);

export { отредактировать };