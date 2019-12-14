import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыскать: PerfectVerb = {
  name: Word('рыскать', 1),
  singular1stPerson: Word('рыщу', 1),
  singular2ndPerson: Word('рыщешь', 1),
  singular3rdPerson: Word('рыщет', 1),
  plural1stPerson: Word('рыщем', 1),
  plural2ndPerson: Word('рыщете', 1),
  plural3rdPerson: Word('рыщут', 1),
  masculinePast: Word('рыскал', 1),
  femininePast: Word('рыскала', 1),
  neuterPast: Word('рыскало', 1),
  pluralPast: Word('рыскали', 1),
  imperativeInformal: Word('рыщи', 1),
  imperativeFormal: Word('рыщите', 1),
  imperfect: [],
};

perfectVerbs.set(рыскать.name.text, рыскать);

export { рыскать };