import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недополучать: PerfectVerb = {
  name: Word('недополучать', 9),
  singular1stPerson: Word('недополучаю', 9),
  singular2ndPerson: Word('недополучаешь', 9),
  singular3rdPerson: Word('недополучает', 9),
  plural1stPerson: Word('недополучаем', 9),
  plural2ndPerson: Word('недополучаете', 9),
  plural3rdPerson: Word('недополучают', 9),
  masculinePast: Word('недополучал', 9),
  femininePast: Word('недополучала', 9),
  neuterPast: Word('недополучало', 9),
  pluralPast: Word('недополучали', 9),
  imperativeInformal: Word('недополучай', 9),
  imperativeFormal: Word('недополучайте', 9),
  imperfect: [],
};

perfectVerbs.set(недополучать.name.text, недополучать);

export { недополучать };