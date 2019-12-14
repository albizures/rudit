import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застать: PerfectVerb = {
  name: Word('застать', 4),
  singular1stPerson: Word('застану', 4),
  singular2ndPerson: Word('застанешь', 4),
  singular3rdPerson: Word('застанет', 4),
  plural1stPerson: Word('застанем', 4),
  plural2ndPerson: Word('застанете', 4),
  plural3rdPerson: Word('застанут', 4),
  masculinePast: Word('застал', 4),
  femininePast: Word('застала', 4),
  neuterPast: Word('застало', 4),
  pluralPast: Word('застали', 4),
  imperativeInformal: Word('застань', 4),
  imperativeFormal: Word('застаньте', 4),
  imperfect: [],
};

perfectVerbs.set(застать.name.text, застать);

export { застать };