import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изыскать: PerfectVerb = {
  name: Word('изыскать', 5),
  singular1stPerson: Word('изыщу', 4),
  singular2ndPerson: Word('изыщешь', 2),
  singular3rdPerson: Word('изыщет', 2),
  plural1stPerson: Word('изыщем', 2),
  plural2ndPerson: Word('изыщете', 2),
  plural3rdPerson: Word('изыщут', 2),
  masculinePast: Word('изыскал', 5),
  femininePast: Word('изыскала', 5),
  neuterPast: Word('изыскало', 5),
  pluralPast: Word('изыскали', 5),
  imperativeInformal: Word('изыщи', 4),
  imperativeFormal: Word('изыщите', 4),
  imperfect: [],
};

perfectVerbs.set(изыскать.name.text, изыскать);

export { изыскать };