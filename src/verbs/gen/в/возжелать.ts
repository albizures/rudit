import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возжелать: PerfectVerb = {
  name: Word('возжелать', 6),
  singular1stPerson: Word('возжелаю', 6),
  singular2ndPerson: Word('возжелаешь', 6),
  singular3rdPerson: Word('возжелает', 6),
  plural1stPerson: Word('возжелаем', 6),
  plural2ndPerson: Word('возжелаете', 6),
  plural3rdPerson: Word('возжелают', 6),
  masculinePast: Word('возжелал', 6),
  femininePast: Word('возжелала', 6),
  neuterPast: Word('возжелало', 6),
  pluralPast: Word('возжелали', 6),
  imperativeInformal: Word('возжелай', 6),
  imperativeFormal: Word('возжелайте', 6),
  imperfect: [],
};

perfectVerbs.set(возжелать.name.text, возжелать);

export { возжелать };