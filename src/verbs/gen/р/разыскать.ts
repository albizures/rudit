import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разыскать: PerfectVerb = {
  name: Word('разыскать', 6),
  singular1stPerson: Word('разыщу', 5),
  singular2ndPerson: Word('разыщешь', 3),
  singular3rdPerson: Word('разыщет', 3),
  plural1stPerson: Word('разыщем', 3),
  plural2ndPerson: Word('разыщете', 3),
  plural3rdPerson: Word('разыщут', 3),
  masculinePast: Word('разыскал', 6),
  femininePast: Word('разыскала', 6),
  neuterPast: Word('разыскало', 6),
  pluralPast: Word('разыскали', 6),
  imperativeInformal: Word('разыщи', 5),
  imperativeFormal: Word('разыщите', 5),
  imperfect: [],
};

perfectVerbs.set(разыскать.name.text, разыскать);

export { разыскать };