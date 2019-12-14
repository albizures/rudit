import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потухать: PerfectVerb = {
  name: Word('потухать', 5),
  singular1stPerson: Word('потухаю', 5),
  singular2ndPerson: Word('потухаешь', 5),
  singular3rdPerson: Word('потухает', 5),
  plural1stPerson: Word('потухаем', 5),
  plural2ndPerson: Word('потухаете', 5),
  plural3rdPerson: Word('потухают', 5),
  masculinePast: Word('потухал', 5),
  femininePast: Word('потухала', 5),
  neuterPast: Word('потухало', 5),
  pluralPast: Word('потухали', 5),
  imperativeInformal: Word('потухай', 5),
  imperativeFormal: Word('потухайте', 5),
  imperfect: [],
};

perfectVerbs.set(потухать.name.text, потухать);

export { потухать };