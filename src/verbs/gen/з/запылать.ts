import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запылать: PerfectVerb = {
  name: Word('запылать', 5),
  singular1stPerson: Word('запылаю', 5),
  singular2ndPerson: Word('запылаешь', 5),
  singular3rdPerson: Word('запылает', 5),
  plural1stPerson: Word('запылаем', 5),
  plural2ndPerson: Word('запылаете', 5),
  plural3rdPerson: Word('запылают', 5),
  masculinePast: Word('запылал', 5),
  femininePast: Word('запылала', 5),
  neuterPast: Word('запылало', 5),
  pluralPast: Word('запылали', 5),
  imperativeInformal: Word('запылай', 5),
  imperativeFormal: Word('запылайте', 5),
  imperfect: [],
};

perfectVerbs.set(запылать.name.text, запылать);

export { запылать };