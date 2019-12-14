import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглушать: PerfectVerb = {
  name: Word('оглушать', 5),
  singular1stPerson: Word('оглушаю', 5),
  singular2ndPerson: Word('оглушаешь', 5),
  singular3rdPerson: Word('оглушает', 5),
  plural1stPerson: Word('оглушаем', 5),
  plural2ndPerson: Word('оглушаете', 5),
  plural3rdPerson: Word('оглушают', 5),
  masculinePast: Word('оглушал', 5),
  femininePast: Word('оглушала', 5),
  neuterPast: Word('оглушало', 5),
  pluralPast: Word('оглушали', 5),
  imperativeInformal: Word('оглушай', 5),
  imperativeFormal: Word('оглушайте', 5),
  imperfect: [],
};

perfectVerbs.set(оглушать.name.text, оглушать);

export { оглушать };