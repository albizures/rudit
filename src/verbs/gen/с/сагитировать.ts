import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сагитировать: PerfectVerb = {
  name: Word('сагитировать', 5),
  singular1stPerson: Word('сагитирую', 5),
  singular2ndPerson: Word('сагитируешь', 5),
  singular3rdPerson: Word('сагитирует', 5),
  plural1stPerson: Word('сагитируем', 5),
  plural2ndPerson: Word('сагитируете', 5),
  plural3rdPerson: Word('сагитируют', 5),
  masculinePast: Word('сагитировал', 5),
  femininePast: Word('сагитировала', 5),
  neuterPast: Word('сагитировало', 5),
  pluralPast: Word('сагитировали', 5),
  imperativeInformal: Word('сагитируй', 5),
  imperativeFormal: Word('сагитируйте', 5),
  imperfect: [],
};

perfectVerbs.set(сагитировать.name.text, сагитировать);

export { сагитировать };