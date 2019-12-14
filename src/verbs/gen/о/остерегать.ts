import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остерегать: PerfectVerb = {
  name: Word('остерегать', 7),
  singular1stPerson: Word('остерегаю', 7),
  singular2ndPerson: Word('остерегаешь', 7),
  singular3rdPerson: Word('остерегает', 7),
  plural1stPerson: Word('остерегаем', 7),
  plural2ndPerson: Word('остерегаете', 7),
  plural3rdPerson: Word('остерегают', 7),
  masculinePast: Word('остерегал', 7),
  femininePast: Word('остерегала', 7),
  neuterPast: Word('остерегало', 7),
  pluralPast: Word('остерегали', 7),
  imperativeInformal: Word('остерегай', 7),
  imperativeFormal: Word('остерегайте', 7),
  imperfect: [],
};

perfectVerbs.set(остерегать.name.text, остерегать);

export { остерегать };