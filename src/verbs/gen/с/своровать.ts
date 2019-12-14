import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const своровать: PerfectVerb = {
  name: Word('своровать', 6),
  singular1stPerson: Word('сворую', 4),
  singular2ndPerson: Word('своруешь', 4),
  singular3rdPerson: Word('сворует', 4),
  plural1stPerson: Word('своруем', 4),
  plural2ndPerson: Word('своруете', 4),
  plural3rdPerson: Word('своруют', 4),
  masculinePast: Word('своровал', 6),
  femininePast: Word('своровала', 6),
  neuterPast: Word('своровало', 6),
  pluralPast: Word('своровали', 6),
  imperativeInformal: Word('своруй', 4),
  imperativeFormal: Word('своруйте', 4),
  imperfect: ['воровать'],
};

perfectVerbs.set(своровать.name.text, своровать);

export { своровать };