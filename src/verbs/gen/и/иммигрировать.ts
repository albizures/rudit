import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иммигрировать: PerfectVerb = {
  name: Word('иммигрировать', 6),
  singular1stPerson: Word('иммигрирую', 6),
  singular2ndPerson: Word('иммигрируешь', 6),
  singular3rdPerson: Word('иммигрирует', 6),
  plural1stPerson: Word('иммигрируем', 6),
  plural2ndPerson: Word('иммигрируете', 6),
  plural3rdPerson: Word('иммигрируют', 6),
  masculinePast: Word('иммигрировал', 6),
  femininePast: Word('иммигрировала', 6),
  neuterPast: Word('иммигрировало', 6),
  pluralPast: Word('иммигрировали', 6),
  imperativeInformal: Word('иммигрируй', 6),
  imperativeFormal: Word('иммигрируйте', 6),
  imperfect: [],
};

perfectVerbs.set(иммигрировать.name.text, иммигрировать);

export { иммигрировать };