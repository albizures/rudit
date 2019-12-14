import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подождать: PerfectVerb = {
  name: Word('подождать', 6),
  singular1stPerson: Word('подожду', 6),
  singular2ndPerson: Word('подождёшь', 1),
  singular3rdPerson: Word('подождёт', 1),
  plural1stPerson: Word('подождём', 1),
  plural2ndPerson: Word('подождёте', 8),
  plural3rdPerson: Word('подождут', 6),
  masculinePast: Word('подождал', 6),
  femininePast: Word('подождала', 8),
  neuterPast: Word('подождало', 6),
  pluralPast: Word('подождали', 6),
  imperativeInformal: Word('подожди', 6),
  imperativeFormal: Word('подождите', 6),
  imperfect: ['ждать'],
};

perfectVerbs.set(подождать.name.text, подождать);

export { подождать };