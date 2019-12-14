import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лакировать: PerfectVerb = {
  name: Word('лакировать', 7),
  singular1stPerson: Word('лакирую', 5),
  singular2ndPerson: Word('лакируешь', 5),
  singular3rdPerson: Word('лакирует', 5),
  plural1stPerson: Word('лакируем', 5),
  plural2ndPerson: Word('лакируете', 5),
  plural3rdPerson: Word('лакируют', 5),
  masculinePast: Word('лакировал', 7),
  femininePast: Word('лакировала', 7),
  neuterPast: Word('лакировало', 7),
  pluralPast: Word('лакировали', 7),
  imperativeInformal: Word('лакируй', 5),
  imperativeFormal: Word('лакируйте', 5),
  imperfect: [],
};

perfectVerbs.set(лакировать.name.text, лакировать);

export { лакировать };