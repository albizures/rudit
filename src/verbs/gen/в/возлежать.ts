import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возлежать: PerfectVerb = {
  name: Word('возлежать', 6),
  singular1stPerson: Word('возлежу', 6),
  singular2ndPerson: Word('возлежишь', 6),
  singular3rdPerson: Word('возлежит', 6),
  plural1stPerson: Word('возлежим', 6),
  plural2ndPerson: Word('возлежите', 6),
  plural3rdPerson: Word('возлежат', 6),
  masculinePast: Word('возлежал', 6),
  femininePast: Word('возлежала', 6),
  neuterPast: Word('возлежало', 6),
  pluralPast: Word('возлежали', 6),
  imperativeInformal: Word('возлежи', 6),
  imperativeFormal: Word('возлежите', 6),
  imperfect: [],
};

perfectVerbs.set(возлежать.name.text, возлежать);

export { возлежать };