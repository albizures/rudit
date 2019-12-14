import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хныкать: PerfectVerb = {
  name: Word('хныкать', 2),
  singular1stPerson: Word('хнычу', 2),
  singular2ndPerson: Word('хнычешь', 2),
  singular3rdPerson: Word('хнычет', 2),
  plural1stPerson: Word('хнычем', 2),
  plural2ndPerson: Word('хнычете', 2),
  plural3rdPerson: Word('хнычут', 2),
  masculinePast: Word('хныкал', 2),
  femininePast: Word('хныкала', 2),
  neuterPast: Word('хныкало', 2),
  pluralPast: Word('хныкали', 2),
  imperativeInformal: Word('хнычь', 2),
  imperativeFormal: Word('хнычьте', 2),
  imperfect: [],
};

perfectVerbs.set(хныкать.name.text, хныкать);

export { хныкать };