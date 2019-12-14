import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвышать: PerfectVerb = {
  name: Word('возвышать', 6),
  singular1stPerson: Word('возвышаю', 6),
  singular2ndPerson: Word('возвышаешь', 6),
  singular3rdPerson: Word('возвышает', 6),
  plural1stPerson: Word('возвышаем', 6),
  plural2ndPerson: Word('возвышаете', 6),
  plural3rdPerson: Word('возвышают', 6),
  masculinePast: Word('возвышал', 6),
  femininePast: Word('возвышала', 6),
  neuterPast: Word('возвышало', 6),
  pluralPast: Word('возвышали', 6),
  imperativeInformal: Word('возвышай', 6),
  imperativeFormal: Word('возвышайте', 6),
  imperfect: [],
};

perfectVerbs.set(возвышать.name.text, возвышать);

export { возвышать };