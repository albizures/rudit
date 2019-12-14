import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сатинировать: PerfectVerb = {
  name: Word('сатинировать', 5),
  singular1stPerson: Word('сатинирую', 5),
  singular2ndPerson: Word('сатинируешь', 5),
  singular3rdPerson: Word('сатинирует', 5),
  plural1stPerson: Word('сатинируем', 5),
  plural2ndPerson: Word('сатинируете', 5),
  plural3rdPerson: Word('сатинируют', 5),
  masculinePast: Word('сатинировал', 5),
  femininePast: Word('сатинировала', 5),
  neuterPast: Word('сатинировало', 5),
  pluralPast: Word('сатинировали', 5),
  imperativeInformal: Word('сатинируй', 5),
  imperativeFormal: Word('сатинируйте', 5),
  imperfect: [],
};

perfectVerbs.set(сатинировать.name.text, сатинировать);

export { сатинировать };