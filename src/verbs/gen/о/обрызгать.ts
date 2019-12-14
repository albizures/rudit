import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрызгать: PerfectVerb = {
  name: Word('обрызгать', 3),
  singular1stPerson: Word('обрызгаю', 3),
  singular2ndPerson: Word('обрызгаешь', 3),
  singular3rdPerson: Word('обрызгает', 3),
  plural1stPerson: Word('обрызгаем', 3),
  plural2ndPerson: Word('обрызгаете', 3),
  plural3rdPerson: Word('обрызгают', 3),
  masculinePast: Word('обрызгал', 3),
  femininePast: Word('обрызгала', 3),
  neuterPast: Word('обрызгало', 3),
  pluralPast: Word('обрызгали', 3),
  imperativeInformal: Word('обрызгай', 3),
  imperativeFormal: Word('обрызгайте', 3),
  imperfect: [],
};

perfectVerbs.set(обрызгать.name.text, обрызгать);

export { обрызгать };