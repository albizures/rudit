import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обождать: PerfectVerb = {
  name: Word('обождать', 5),
  singular1stPerson: Word('обожду', 5),
  singular2ndPerson: Word('обождёшь', 0),
  singular3rdPerson: Word('обождёт', 0),
  plural1stPerson: Word('обождём', 0),
  plural2ndPerson: Word('обождёте', 7),
  plural3rdPerson: Word('обождут', 5),
  masculinePast: Word('обождал', 5),
  femininePast: Word('обождала', 7),
  neuterPast: Word('обождало', 5),
  pluralPast: Word('обождали', 5),
  imperativeInformal: Word('обожди', 5),
  imperativeFormal: Word('обождите', 5),
  imperfect: [],
};

perfectVerbs.set(обождать.name.text, обождать);

export { обождать };