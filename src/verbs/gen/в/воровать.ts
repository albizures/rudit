import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воровать: PerfectVerb = {
  name: Word('воровать', 5),
  singular1stPerson: Word('ворую', 3),
  singular2ndPerson: Word('воруешь', 3),
  singular3rdPerson: Word('ворует', 3),
  plural1stPerson: Word('воруем', 3),
  plural2ndPerson: Word('воруете', 3),
  plural3rdPerson: Word('воруют', 3),
  masculinePast: Word('воровал', 5),
  femininePast: Word('воровала', 5),
  neuterPast: Word('воровало', 5),
  pluralPast: Word('воровали', 5),
  imperativeInformal: Word('воруй', 3),
  imperativeFormal: Word('воруйте', 3),
  imperfect: ['своровать'],
};

perfectVerbs.set(воровать.name.text, воровать);

export { воровать };