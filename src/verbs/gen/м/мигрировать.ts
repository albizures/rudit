import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мигрировать: PerfectVerb = {
  name: Word('мигрировать', 4),
  singular1stPerson: Word('мигрирую', 4),
  singular2ndPerson: Word('мигрируешь', 4),
  singular3rdPerson: Word('мигрирует', 4),
  plural1stPerson: Word('мигрируем', 4),
  plural2ndPerson: Word('мигрируете', 4),
  plural3rdPerson: Word('мигрируют', 4),
  masculinePast: Word('мигрировал', 4),
  femininePast: Word('мигрировала', 4),
  neuterPast: Word('мигрировало', 4),
  pluralPast: Word('мигрировали', 4),
  imperativeInformal: Word('мигрируй', 4),
  imperativeFormal: Word('мигрируйте', 4),
  imperfect: [],
};

perfectVerbs.set(мигрировать.name.text, мигрировать);

export { мигрировать };