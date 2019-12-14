import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсылать: PerfectVerb = {
  name: Word('отсылать', 5),
  singular1stPerson: Word('отсылаю', 5),
  singular2ndPerson: Word('отсылаешь', 5),
  singular3rdPerson: Word('отсылает', 5),
  plural1stPerson: Word('отсылаем', 5),
  plural2ndPerson: Word('отсылаете', 5),
  plural3rdPerson: Word('отсылают', 5),
  masculinePast: Word('отсылал', 5),
  femininePast: Word('отсылала', 5),
  neuterPast: Word('отсылало', 5),
  pluralPast: Word('отсылали', 5),
  imperativeInformal: Word('отсылай', 5),
  imperativeFormal: Word('отсылайте', 5),
  imperfect: [],
};

perfectVerbs.set(отсылать.name.text, отсылать);

export { отсылать };