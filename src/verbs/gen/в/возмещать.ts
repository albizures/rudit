import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возмещать: PerfectVerb = {
  name: Word('возмещать', 6),
  singular1stPerson: Word('возмещаю', 6),
  singular2ndPerson: Word('возмещаешь', 6),
  singular3rdPerson: Word('возмещает', 6),
  plural1stPerson: Word('возмещаем', 6),
  plural2ndPerson: Word('возмещаете', 6),
  plural3rdPerson: Word('возмещают', 6),
  masculinePast: Word('возмещал', 6),
  femininePast: Word('возмещала', 6),
  neuterPast: Word('возмещало', 6),
  pluralPast: Word('возмещали', 6),
  imperativeInformal: Word('возмещай', 6),
  imperativeFormal: Word('возмещайте', 6),
  imperfect: [],
};

perfectVerbs.set(возмещать.name.text, возмещать);

export { возмещать };