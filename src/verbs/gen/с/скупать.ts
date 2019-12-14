import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скупать: PerfectVerb = {
  name: Word('скупать', 4),
  singular1stPerson: Word('скупаю', 4),
  singular2ndPerson: Word('скупаешь', 4),
  singular3rdPerson: Word('скупает', 4),
  plural1stPerson: Word('скупаем', 4),
  plural2ndPerson: Word('скупаете', 4),
  plural3rdPerson: Word('скупают', 4),
  masculinePast: Word('скупал', 4),
  femininePast: Word('скупала', 4),
  neuterPast: Word('скупало', 4),
  pluralPast: Word('скупали', 4),
  imperativeInformal: Word('скупай', 4),
  imperativeFormal: Word('скупайте', 4),
  imperfect: [],
};

perfectVerbs.set(скупать.name.text, скупать);

export { скупать };