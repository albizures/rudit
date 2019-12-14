import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const концентрировать: PerfectVerb = {
  name: Word('концентрировать', 8),
  singular1stPerson: Word('концентрирую', 8),
  singular2ndPerson: Word('концентрируешь', 8),
  singular3rdPerson: Word('концентрирует', 8),
  plural1stPerson: Word('концентрируем', 8),
  plural2ndPerson: Word('концентрируете', 8),
  plural3rdPerson: Word('концентрируют', 8),
  masculinePast: Word('концентрировал', 8),
  femininePast: Word('концентрировала', 8),
  neuterPast: Word('концентрировало', 8),
  pluralPast: Word('концентрировали', 8),
  imperativeInformal: Word('концентрируй', 8),
  imperativeFormal: Word('концентрируйте', 8),
  imperfect: [],
};

perfectVerbs.set(концентрировать.name.text, концентрировать);

export { концентрировать };