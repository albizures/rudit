import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возмущать: PerfectVerb = {
  name: Word('возмущать', 6),
  singular1stPerson: Word('возмущаю', 6),
  singular2ndPerson: Word('возмущаешь', 6),
  singular3rdPerson: Word('возмущает', 6),
  plural1stPerson: Word('возмущаем', 6),
  plural2ndPerson: Word('возмущаете', 6),
  plural3rdPerson: Word('возмущают', 6),
  masculinePast: Word('возмущал', 6),
  femininePast: Word('возмущала', 6),
  neuterPast: Word('возмущало', 6),
  pluralPast: Word('возмущали', 6),
  imperativeInformal: Word('возмущай', 6),
  imperativeFormal: Word('возмущайте', 6),
  imperfect: [],
};

perfectVerbs.set(возмущать.name.text, возмущать);

export { возмущать };