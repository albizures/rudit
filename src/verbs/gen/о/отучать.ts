import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отучать: PerfectVerb = {
  name: Word('отучать', 4),
  singular1stPerson: Word('отучаю', 4),
  singular2ndPerson: Word('отучаешь', 4),
  singular3rdPerson: Word('отучает', 4),
  plural1stPerson: Word('отучаем', 4),
  plural2ndPerson: Word('отучаете', 4),
  plural3rdPerson: Word('отучают', 4),
  masculinePast: Word('отучал', 4),
  femininePast: Word('отучала', 4),
  neuterPast: Word('отучало', 4),
  pluralPast: Word('отучали', 4),
  imperativeInformal: Word('отучай', 4),
  imperativeFormal: Word('отучайте', 4),
  imperfect: [],
};

perfectVerbs.set(отучать.name.text, отучать);

export { отучать };