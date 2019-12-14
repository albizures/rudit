import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const музицировать: PerfectVerb = {
  name: Word('музицировать', 5),
  singular1stPerson: Word('музицирую', 5),
  singular2ndPerson: Word('музицируешь', 5),
  singular3rdPerson: Word('музицирует', 5),
  plural1stPerson: Word('музицируем', 5),
  plural2ndPerson: Word('музицируете', 5),
  plural3rdPerson: Word('музицируют', 5),
  masculinePast: Word('музицировал', 5),
  femininePast: Word('музицировала', 5),
  neuterPast: Word('музицировало', 5),
  pluralPast: Word('музицировали', 5),
  imperativeInformal: Word('музицируй', 5),
  imperativeFormal: Word('музицируйте', 5),
  imperfect: [],
};

perfectVerbs.set(музицировать.name.text, музицировать);

export { музицировать };