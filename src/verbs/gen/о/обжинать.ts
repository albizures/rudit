import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжинать: PerfectVerb = {
  name: Word('обжинать', 5),
  singular1stPerson: Word('обжинаю', 5),
  singular2ndPerson: Word('обжинаешь', 5),
  singular3rdPerson: Word('обжинает', 5),
  plural1stPerson: Word('обжинаем', 5),
  plural2ndPerson: Word('обжинаете', 5),
  plural3rdPerson: Word('обжинают', 5),
  masculinePast: Word('обжинал', 5),
  femininePast: Word('обжинала', 5),
  neuterPast: Word('обжинало', 5),
  pluralPast: Word('обжинали', 5),
  imperativeInformal: Word('обжинай', 5),
  imperativeFormal: Word('обжинайте', 5),
  imperfect: [],
};

perfectVerbs.set(обжинать.name.text, обжинать);

export { обжинать };