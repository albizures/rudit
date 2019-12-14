import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восторгать: PerfectVerb = {
  name: Word('восторгать', 7),
  singular1stPerson: Word('восторгаю', 7),
  singular2ndPerson: Word('восторгаешь', 7),
  singular3rdPerson: Word('восторгает', 7),
  plural1stPerson: Word('восторгаем', 7),
  plural2ndPerson: Word('восторгаете', 7),
  plural3rdPerson: Word('восторгают', 7),
  masculinePast: Word('восторгал', 7),
  femininePast: Word('восторгала', 7),
  neuterPast: Word('восторгало', 7),
  pluralPast: Word('восторгали', 7),
  imperativeInformal: Word('восторгай', 7),
  imperativeFormal: Word('восторгайте', 7),
  imperfect: [],
};

perfectVerbs.set(восторгать.name.text, восторгать);

export { восторгать };