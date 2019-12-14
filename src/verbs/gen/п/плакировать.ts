import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плакировать: PerfectVerb = {
  name: Word('плакировать', 8),
  singular1stPerson: Word('плакирую', 6),
  singular2ndPerson: Word('плакируешь', 6),
  singular3rdPerson: Word('плакирует', 6),
  plural1stPerson: Word('плакируем', 6),
  plural2ndPerson: Word('плакируете', 6),
  plural3rdPerson: Word('плакируют', 6),
  masculinePast: Word('плакировал', 8),
  femininePast: Word('плакировала', 8),
  neuterPast: Word('плакировало', 8),
  pluralPast: Word('плакировали', 8),
  imperativeInformal: Word('плакируй', 6),
  imperativeFormal: Word('плакируйте', 6),
  imperfect: [],
};

perfectVerbs.set(плакировать.name.text, плакировать);

export { плакировать };