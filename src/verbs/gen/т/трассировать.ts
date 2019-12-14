import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трассировать: PerfectVerb = {
  name: Word('трассировать', 5),
  singular1stPerson: Word('трассирую', 5),
  singular2ndPerson: Word('трассируешь', 5),
  singular3rdPerson: Word('трассирует', 5),
  plural1stPerson: Word('трассируем', 5),
  plural2ndPerson: Word('трассируете', 5),
  plural3rdPerson: Word('трассируют', 5),
  masculinePast: Word('трассировал', 5),
  femininePast: Word('трассировала', 5),
  neuterPast: Word('трассировало', 5),
  pluralPast: Word('трассировали', 5),
  imperativeInformal: Word('трассируй', 5),
  imperativeFormal: Word('трассируйте', 5),
  imperfect: [],
};

perfectVerbs.set(трассировать.name.text, трассировать);

export { трассировать };