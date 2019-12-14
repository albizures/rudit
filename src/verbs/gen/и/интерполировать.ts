import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интерполировать: PerfectVerb = {
  name: Word('интерполировать', 8),
  singular1stPerson: Word('интерполирую', 8),
  singular2ndPerson: Word('интерполируешь', 8),
  singular3rdPerson: Word('интерполирует', 8),
  plural1stPerson: Word('интерполируем', 8),
  plural2ndPerson: Word('интерполируете', 8),
  plural3rdPerson: Word('интерполируют', 8),
  masculinePast: Word('интерполировал', 8),
  femininePast: Word('интерполировала', 8),
  neuterPast: Word('интерполировало', 8),
  pluralPast: Word('интерполировали', 8),
  imperativeInformal: Word('интерполируй', 8),
  imperativeFormal: Word('интерполируйте', 8),
  imperfect: [],
};

perfectVerbs.set(интерполировать.name.text, интерполировать);

export { интерполировать };