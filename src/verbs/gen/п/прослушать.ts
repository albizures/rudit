import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослушать: PerfectVerb = {
  name: Word('прослушать', 5),
  singular1stPerson: Word('прослушаю', 5),
  singular2ndPerson: Word('прослушаешь', 5),
  singular3rdPerson: Word('прослушает', 5),
  plural1stPerson: Word('прослушаем', 5),
  plural2ndPerson: Word('прослушаете', 5),
  plural3rdPerson: Word('прослушают', 5),
  masculinePast: Word('прослушал', 5),
  femininePast: Word('прослушала', 5),
  neuterPast: Word('прослушало', 5),
  pluralPast: Word('прослушали', 5),
  imperativeInformal: Word('прослушай', 5),
  imperativeFormal: Word('прослушайте', 5),
  imperfect: [],
};

perfectVerbs.set(прослушать.name.text, прослушать);

export { прослушать };