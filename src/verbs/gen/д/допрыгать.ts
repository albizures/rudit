import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допрыгать: PerfectVerb = {
  name: Word('допрыгать', 4),
  singular1stPerson: Word('допрыгаю', 4),
  singular2ndPerson: Word('допрыгаешь', 4),
  singular3rdPerson: Word('допрыгает', 4),
  plural1stPerson: Word('допрыгаем', 4),
  plural2ndPerson: Word('допрыгаете', 4),
  plural3rdPerson: Word('допрыгают', 4),
  masculinePast: Word('допрыгал', 4),
  femininePast: Word('допрыгала', 4),
  neuterPast: Word('допрыгало', 4),
  pluralPast: Word('допрыгали', 4),
  imperativeInformal: Word('допрыгай', 4),
  imperativeFormal: Word('допрыгайте', 4),
  imperfect: [],
};

perfectVerbs.set(допрыгать.name.text, допрыгать);

export { допрыгать };