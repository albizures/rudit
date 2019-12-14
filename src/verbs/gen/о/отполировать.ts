import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отполировать: PerfectVerb = {
  name: Word('отполировать', 9),
  singular1stPerson: Word('отполирую', 7),
  singular2ndPerson: Word('отполируешь', 7),
  singular3rdPerson: Word('отполирует', 7),
  plural1stPerson: Word('отполируем', 7),
  plural2ndPerson: Word('отполируете', 7),
  plural3rdPerson: Word('отполируют', 7),
  masculinePast: Word('отполировал', 9),
  femininePast: Word('отполировала', 9),
  neuterPast: Word('отполировало', 9),
  pluralPast: Word('отполировали', 9),
  imperativeInformal: Word('отполируй', 7),
  imperativeFormal: Word('отполируйте', 7),
  imperfect: [],
};

perfectVerbs.set(отполировать.name.text, отполировать);

export { отполировать };