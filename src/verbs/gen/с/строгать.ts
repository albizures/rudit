import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const строгать: PerfectVerb = {
  name: Word('строгать', 5),
  singular1stPerson: Word('строгаю', 5),
  singular2ndPerson: Word('строгаешь', 5),
  singular3rdPerson: Word('строгает', 5),
  plural1stPerson: Word('строгаем', 5),
  plural2ndPerson: Word('строгаете', 5),
  plural3rdPerson: Word('строгают', 5),
  masculinePast: Word('строгал', 5),
  femininePast: Word('строгала', 5),
  neuterPast: Word('строгало', 5),
  pluralPast: Word('строгали', 5),
  imperativeInformal: Word('строгай', 5),
  imperativeFormal: Word('строгайте', 5),
  imperfect: [],
};

perfectVerbs.set(строгать.name.text, строгать);

export { строгать };