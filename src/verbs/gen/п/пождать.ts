import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пождать: PerfectVerb = {
  name: Word('пождать', 4),
  singular1stPerson: Word('пожду', 4),
  singular2ndPerson: Word('пождёшь', 4),
  singular3rdPerson: Word('пождёт', 4),
  plural1stPerson: Word('пождём', 4),
  plural2ndPerson: Word('пождёте', 4),
  plural3rdPerson: Word('пождут', 4),
  masculinePast: Word('пождал', 4),
  femininePast: Word('пождала', 6),
  neuterPast: Word('пождало', 4),
  pluralPast: Word('пождали', 4),
  imperativeInformal: Word('пожди', 4),
  imperativeFormal: Word('пождите', 4),
  imperfect: [],
};

perfectVerbs.set(пождать.name.text, пождать);

export { пождать };