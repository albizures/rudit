import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нитрировать: PerfectVerb = {
  name: Word('нитрировать', 4),
  singular1stPerson: Word('нитрирую', 4),
  singular2ndPerson: Word('нитрируешь', 4),
  singular3rdPerson: Word('нитрирует', 4),
  plural1stPerson: Word('нитрируем', 4),
  plural2ndPerson: Word('нитрируете', 4),
  plural3rdPerson: Word('нитрируют', 4),
  masculinePast: Word('нитрировал', 4),
  femininePast: Word('нитрировала', 4),
  neuterPast: Word('нитрировало', 4),
  pluralPast: Word('нитрировали', 4),
  imperativeInformal: Word('нитрируй', 4),
  imperativeFormal: Word('нитрируйте', 4),
  imperfect: [],
};

perfectVerbs.set(нитрировать.name.text, нитрировать);

export { нитрировать };