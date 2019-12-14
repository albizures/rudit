import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ретушировать: PerfectVerb = {
  name: Word('ретушировать', 5),
  singular1stPerson: Word('ретуширую', 5),
  singular2ndPerson: Word('ретушируешь', 5),
  singular3rdPerson: Word('ретуширует', 5),
  plural1stPerson: Word('ретушируем', 5),
  plural2ndPerson: Word('ретушируете', 5),
  plural3rdPerson: Word('ретушируют', 5),
  masculinePast: Word('ретушировал', 5),
  femininePast: Word('ретушировала', 5),
  neuterPast: Word('ретушировало', 5),
  pluralPast: Word('ретушировали', 5),
  imperativeInformal: Word('ретушируй', 5),
  imperativeFormal: Word('ретушируйте', 5),
  imperfect: [],
};

perfectVerbs.set(ретушировать.name.text, ретушировать);

export { ретушировать };