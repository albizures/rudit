import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отторгать: PerfectVerb = {
  name: Word('отторгать', 6),
  singular1stPerson: Word('отторгаю', 6),
  singular2ndPerson: Word('отторгаешь', 6),
  singular3rdPerson: Word('отторгает', 6),
  plural1stPerson: Word('отторгаем', 6),
  plural2ndPerson: Word('отторгаете', 6),
  plural3rdPerson: Word('отторгают', 6),
  masculinePast: Word('отторгал', 6),
  femininePast: Word('отторгала', 6),
  neuterPast: Word('отторгало', 6),
  pluralPast: Word('отторгали', 6),
  imperativeInformal: Word('отторгай', 6),
  imperativeFormal: Word('отторгайте', 6),
  imperfect: [],
};

perfectVerbs.set(отторгать.name.text, отторгать);

export { отторгать };