import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрадовать: PerfectVerb = {
  name: Word('обрадовать', 3),
  singular1stPerson: Word('обрадую', 3),
  singular2ndPerson: Word('обрадуешь', 3),
  singular3rdPerson: Word('обрадует', 3),
  plural1stPerson: Word('обрадуем', 3),
  plural2ndPerson: Word('обрадуете', 3),
  plural3rdPerson: Word('обрадуют', 3),
  masculinePast: Word('обрадовал', 3),
  femininePast: Word('обрадовала', 3),
  neuterPast: Word('обрадовало', 3),
  pluralPast: Word('обрадовали', 3),
  imperativeInformal: Word('обрадуй', 3),
  imperativeFormal: Word('обрадуйте', 3),
  imperfect: [],
};

perfectVerbs.set(обрадовать.name.text, обрадовать);

export { обрадовать };