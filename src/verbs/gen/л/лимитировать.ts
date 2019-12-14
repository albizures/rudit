import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лимитировать: PerfectVerb = {
  name: Word('лимитировать', 5),
  singular1stPerson: Word('лимитирую', 5),
  singular2ndPerson: Word('лимитируешь', 5),
  singular3rdPerson: Word('лимитирует', 5),
  plural1stPerson: Word('лимитируем', 5),
  plural2ndPerson: Word('лимитируете', 5),
  plural3rdPerson: Word('лимитируют', 5),
  masculinePast: Word('лимитировал', 5),
  femininePast: Word('лимитировала', 5),
  neuterPast: Word('лимитировало', 5),
  pluralPast: Word('лимитировали', 5),
  imperativeInformal: Word('лимитируй', 5),
  imperativeFormal: Word('лимитируйте', 5),
  imperfect: [],
};

perfectVerbs.set(лимитировать.name.text, лимитировать);

export { лимитировать };