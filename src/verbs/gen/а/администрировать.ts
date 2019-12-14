import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const администрировать: PerfectVerb = {
  name: Word('администрировать', 9),
  singular1stPerson: Word('администрирую', 9),
  singular2ndPerson: Word('администрируешь', 9),
  singular3rdPerson: Word('администрирует', 9),
  plural1stPerson: Word('администрируем', 9),
  plural2ndPerson: Word('администрируете', 9),
  plural3rdPerson: Word('администрируют', 9),
  masculinePast: Word('администрировал', 9),
  femininePast: Word('администрировала', 9),
  neuterPast: Word('администрировало', 9),
  pluralPast: Word('администрировали', 9),
  imperativeInformal: Word('администрируй', 9),
  imperativeFormal: Word('администрируйте', 9),
  imperfect: [],
};

perfectVerbs.set(администрировать.name.text, администрировать);

export { администрировать };