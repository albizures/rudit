import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искусать: PerfectVerb = {
  name: Word('искусать', 5),
  singular1stPerson: Word('искусаю', 5),
  singular2ndPerson: Word('искусаешь', 5),
  singular3rdPerson: Word('искусает', 5),
  plural1stPerson: Word('искусаем', 5),
  plural2ndPerson: Word('искусаете', 5),
  plural3rdPerson: Word('искусают', 5),
  masculinePast: Word('искусал', 5),
  femininePast: Word('искусала', 5),
  neuterPast: Word('искусало', 5),
  pluralPast: Word('искусали', 5),
  imperativeInformal: Word('искусай', 5),
  imperativeFormal: Word('искусайте', 5),
  imperfect: [],
};

perfectVerbs.set(искусать.name.text, искусать);

export { искусать };