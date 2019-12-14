import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбрехать: PerfectVerb = {
  name: Word('сбрехать', 5),
  singular1stPerson: Word('сбрешу', 5),
  singular2ndPerson: Word('сбрешешь', 3),
  singular3rdPerson: Word('сбрешет', 3),
  plural1stPerson: Word('сбрешем', 3),
  plural2ndPerson: Word('сбрешете', 3),
  plural3rdPerson: Word('сбрешут', 3),
  masculinePast: Word('сбрехал', 5),
  femininePast: Word('сбрехала', 5),
  neuterPast: Word('сбрехало', 5),
  pluralPast: Word('сбрехали', 5),
  imperativeInformal: Word('сбреши', 5),
  imperativeFormal: Word('сбрешите', 5),
  imperfect: [],
};

perfectVerbs.set(сбрехать.name.text, сбрехать);

export { сбрехать };