import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исторгать: PerfectVerb = {
  name: Word('исторгать', 6),
  singular1stPerson: Word('исторгаю', 6),
  singular2ndPerson: Word('исторгаешь', 6),
  singular3rdPerson: Word('исторгает', 6),
  plural1stPerson: Word('исторгаем', 6),
  plural2ndPerson: Word('исторгаете', 6),
  plural3rdPerson: Word('исторгают', 6),
  masculinePast: Word('исторгал', 6),
  femininePast: Word('исторгала', 6),
  neuterPast: Word('исторгало', 6),
  pluralPast: Word('исторгали', 6),
  imperativeInformal: Word('исторгай', 6),
  imperativeFormal: Word('исторгайте', 6),
  imperfect: [],
};

perfectVerbs.set(исторгать.name.text, исторгать);

export { исторгать };