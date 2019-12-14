import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвещать: PerfectVerb = {
  name: Word('возвещать', 6),
  singular1stPerson: Word('возвещаю', 6),
  singular2ndPerson: Word('возвещаешь', 6),
  singular3rdPerson: Word('возвещает', 6),
  plural1stPerson: Word('возвещаем', 6),
  plural2ndPerson: Word('возвещаете', 6),
  plural3rdPerson: Word('возвещают', 6),
  masculinePast: Word('возвещал', 6),
  femininePast: Word('возвещала', 6),
  neuterPast: Word('возвещало', 6),
  pluralPast: Word('возвещали', 6),
  imperativeInformal: Word('возвещай', 6),
  imperativeFormal: Word('возвещайте', 6),
  imperfect: [],
};

perfectVerbs.set(возвещать.name.text, возвещать);

export { возвещать };