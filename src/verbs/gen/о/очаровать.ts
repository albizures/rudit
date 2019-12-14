import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очаровать: PerfectVerb = {
  name: Word('очаровать', 6),
  singular1stPerson: Word('очарую', 4),
  singular2ndPerson: Word('очаруешь', 4),
  singular3rdPerson: Word('очарует', 4),
  plural1stPerson: Word('очаруем', 4),
  plural2ndPerson: Word('очаруете', 4),
  plural3rdPerson: Word('очаруют', 4),
  masculinePast: Word('очаровал', 6),
  femininePast: Word('очаровала', 6),
  neuterPast: Word('очаровало', 6),
  pluralPast: Word('очаровали', 6),
  imperativeInformal: Word('очаруй', 4),
  imperativeFormal: Word('очаруйте', 4),
  imperfect: [],
};

perfectVerbs.set(очаровать.name.text, очаровать);

export { очаровать };