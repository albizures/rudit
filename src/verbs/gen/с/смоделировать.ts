import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смоделировать: PerfectVerb = {
  name: Word('смоделировать', 6),
  singular1stPerson: Word('смоделирую', 6),
  singular2ndPerson: Word('смоделируешь', 6),
  singular3rdPerson: Word('смоделирует', 6),
  plural1stPerson: Word('смоделируем', 6),
  plural2ndPerson: Word('смоделируете', 6),
  plural3rdPerson: Word('смоделируют', 6),
  masculinePast: Word('смоделировал', 6),
  femininePast: Word('смоделировала', 6),
  neuterPast: Word('смоделировало', 6),
  pluralPast: Word('смоделировали', 6),
  imperativeInformal: Word('смоделируй', 6),
  imperativeFormal: Word('смоделируйте', 6),
  imperfect: [],
};

perfectVerbs.set(смоделировать.name.text, смоделировать);

export { смоделировать };