import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мотивировать: PerfectVerb = {
  name: Word('мотивировать', 5),
  singular1stPerson: Word('мотивирую', 5),
  singular2ndPerson: Word('мотивируешь', 5),
  singular3rdPerson: Word('мотивирует', 5),
  plural1stPerson: Word('мотивируем', 5),
  plural2ndPerson: Word('мотивируете', 5),
  plural3rdPerson: Word('мотивируют', 5),
  masculinePast: Word('мотивировал', 5),
  femininePast: Word('мотивировала', 5),
  neuterPast: Word('мотивировало', 5),
  pluralPast: Word('мотивировали', 5),
  imperativeInformal: Word('мотивируй', 5),
  imperativeFormal: Word('мотивируйте', 5),
  imperfect: [],
};

perfectVerbs.set(мотивировать.name.text, мотивировать);

export { мотивировать };