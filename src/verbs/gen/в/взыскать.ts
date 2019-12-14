import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взыскать: PerfectVerb = {
  name: Word('взыскать', 5),
  singular1stPerson: Word('взыщу', 4),
  singular2ndPerson: Word('взыщешь', 2),
  singular3rdPerson: Word('взыщет', 2),
  plural1stPerson: Word('взыщем', 2),
  plural2ndPerson: Word('взыщете', 2),
  plural3rdPerson: Word('взыщут', 2),
  masculinePast: Word('взыскал', 5),
  femininePast: Word('взыскала', 5),
  neuterPast: Word('взыскало', 5),
  pluralPast: Word('взыскали', 5),
  imperativeInformal: Word('взыщи', 4),
  imperativeFormal: Word('взыщите', 4),
  imperfect: [],
};

perfectVerbs.set(взыскать.name.text, взыскать);

export { взыскать };