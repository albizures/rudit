import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лавировать: PerfectVerb = {
  name: Word('лавировать', 3),
  singular1stPerson: Word('лавирую', 3),
  singular2ndPerson: Word('лавируешь', 3),
  singular3rdPerson: Word('лавирует', 3),
  plural1stPerson: Word('лавируем', 3),
  plural2ndPerson: Word('лавируете', 3),
  plural3rdPerson: Word('лавируют', 3),
  masculinePast: Word('лавировал', 3),
  femininePast: Word('лавировала', 3),
  neuterPast: Word('лавировало', 3),
  pluralPast: Word('лавировали', 3),
  imperativeInformal: Word('лавируй', 3),
  imperativeFormal: Word('лавируйте', 3),
  imperfect: [],
};

perfectVerbs.set(лавировать.name.text, лавировать);

export { лавировать };