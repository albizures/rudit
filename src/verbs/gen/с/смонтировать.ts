import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смонтировать: PerfectVerb = {
  name: Word('смонтировать', 5),
  singular1stPerson: Word('смонтирую', 5),
  singular2ndPerson: Word('смонтируешь', 5),
  singular3rdPerson: Word('смонтирует', 5),
  plural1stPerson: Word('смонтируем', 5),
  plural2ndPerson: Word('смонтируете', 5),
  plural3rdPerson: Word('смонтируют', 5),
  masculinePast: Word('смонтировал', 5),
  femininePast: Word('смонтировала', 5),
  neuterPast: Word('смонтировало', 5),
  pluralPast: Word('смонтировали', 5),
  imperativeInformal: Word('смонтируй', 5),
  imperativeFormal: Word('смонтируйте', 5),
  imperfect: [],
};

perfectVerbs.set(смонтировать.name.text, смонтировать);

export { смонтировать };