import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возлагать: PerfectVerb = {
  name: Word('возлагать', 6),
  singular1stPerson: Word('возлагаю', 6),
  singular2ndPerson: Word('возлагаешь', 6),
  singular3rdPerson: Word('возлагает', 6),
  plural1stPerson: Word('возлагаем', 6),
  plural2ndPerson: Word('возлагаете', 6),
  plural3rdPerson: Word('возлагают', 6),
  masculinePast: Word('возлагал', 6),
  femininePast: Word('возлагала', 6),
  neuterPast: Word('возлагало', 6),
  pluralPast: Word('возлагали', 6),
  imperativeInformal: Word('возлагай', 6),
  imperativeFormal: Word('возлагайте', 6),
  imperfect: [],
};

perfectVerbs.set(возлагать.name.text, возлагать);

export { возлагать };