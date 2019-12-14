import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прождать: PerfectVerb = {
  name: Word('прождать', 5),
  singular1stPerson: Word('прожду', 5),
  singular2ndPerson: Word('прождёшь', 5),
  singular3rdPerson: Word('прождёт', 5),
  plural1stPerson: Word('прождём', 5),
  plural2ndPerson: Word('прождёте', 5),
  plural3rdPerson: Word('прождут', 5),
  masculinePast: Word('прождал', 5),
  femininePast: Word('прождала', 7),
  neuterPast: Word('прождало', 5),
  pluralPast: Word('прождали', 5),
  imperativeInformal: Word('прожди', 5),
  imperativeFormal: Word('прождите', 5),
  imperfect: [],
};

perfectVerbs.set(прождать.name.text, прождать);

export { прождать };