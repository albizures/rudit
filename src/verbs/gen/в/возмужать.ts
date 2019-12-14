import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возмужать: PerfectVerb = {
  name: Word('возмужать', 6),
  singular1stPerson: Word('возмужаю', 6),
  singular2ndPerson: Word('возмужаешь', 6),
  singular3rdPerson: Word('возмужает', 6),
  plural1stPerson: Word('возмужаем', 6),
  plural2ndPerson: Word('возмужаете', 6),
  plural3rdPerson: Word('возмужают', 6),
  masculinePast: Word('возмужал', 6),
  femininePast: Word('возмужала', 6),
  neuterPast: Word('возмужало', 6),
  pluralPast: Word('возмужали', 6),
  imperativeInformal: Word('возмужай', 6),
  imperativeFormal: Word('возмужайте', 6),
  imperfect: [],
};

perfectVerbs.set(возмужать.name.text, возмужать);

export { возмужать };