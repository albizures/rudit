import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запухать: PerfectVerb = {
  name: Word('запухать', 5),
  singular1stPerson: Word('запухаю', 5),
  singular2ndPerson: Word('запухаешь', 5),
  singular3rdPerson: Word('запухает', 5),
  plural1stPerson: Word('запухаем', 5),
  plural2ndPerson: Word('запухаете', 5),
  plural3rdPerson: Word('запухают', 5),
  masculinePast: Word('запухал', 5),
  femininePast: Word('запухала', 5),
  neuterPast: Word('запухало', 5),
  pluralPast: Word('запухали', 5),
  imperativeInformal: Word('запухай', 5),
  imperativeFormal: Word('запухайте', 5),
  imperfect: [],
};

perfectVerbs.set(запухать.name.text, запухать);

export { запухать };