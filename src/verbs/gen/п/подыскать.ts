import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыскать: PerfectVerb = {
  name: Word('подыскать', 6),
  singular1stPerson: Word('подыщу', 5),
  singular2ndPerson: Word('подыщешь', 3),
  singular3rdPerson: Word('подыщет', 3),
  plural1stPerson: Word('подыщем', 3),
  plural2ndPerson: Word('подыщете', 3),
  plural3rdPerson: Word('подыщут', 3),
  masculinePast: Word('подыскал', 6),
  femininePast: Word('подыскала', 6),
  neuterPast: Word('подыскало', 6),
  pluralPast: Word('подыскали', 6),
  imperativeInformal: Word('подыщи', 5),
  imperativeFormal: Word('подыщите', 5),
  imperfect: [],
};

perfectVerbs.set(подыскать.name.text, подыскать);

export { подыскать };