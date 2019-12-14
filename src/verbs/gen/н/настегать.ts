import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настегать: PerfectVerb = {
  name: Word('настегать', 6),
  singular1stPerson: Word('настегаю', 6),
  singular2ndPerson: Word('настегаешь', 6),
  singular3rdPerson: Word('настегает', 6),
  plural1stPerson: Word('настегаем', 6),
  plural2ndPerson: Word('настегаете', 6),
  plural3rdPerson: Word('настегают', 6),
  masculinePast: Word('настегал', 6),
  femininePast: Word('настегала', 6),
  neuterPast: Word('настегало', 6),
  pluralPast: Word('настегали', 6),
  imperativeInformal: Word('настегай', 6),
  imperativeFormal: Word('настегайте', 6),
  imperfect: [],
};

perfectVerbs.set(настегать.name.text, настегать);

export { настегать };