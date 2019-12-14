import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обосновать: PerfectVerb = {
  name: Word('обосновать', 7),
  singular1stPerson: Word('обосную', 5),
  singular2ndPerson: Word('обоснуешь', 5),
  singular3rdPerson: Word('обоснует', 5),
  plural1stPerson: Word('обоснуем', 5),
  plural2ndPerson: Word('обоснуете', 5),
  plural3rdPerson: Word('обоснуют', 5),
  masculinePast: Word('обосновал', 7),
  femininePast: Word('обосновала', 7),
  neuterPast: Word('обосновало', 7),
  pluralPast: Word('обосновали', 7),
  imperativeInformal: Word('обоснуй', 5),
  imperativeFormal: Word('обоснуйте', 5),
  imperfect: [],
};

perfectVerbs.set(обосновать.name.text, обосновать);

export { обосновать };