import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завизжать: PerfectVerb = {
  name: Word('завизжать', 6),
  singular1stPerson: Word('завизжу', 6),
  singular2ndPerson: Word('завизжишь', 6),
  singular3rdPerson: Word('завизжит', 6),
  plural1stPerson: Word('завизжим', 6),
  plural2ndPerson: Word('завизжите', 6),
  plural3rdPerson: Word('завизжат', 6),
  masculinePast: Word('завизжал', 6),
  femininePast: Word('завизжала', 6),
  neuterPast: Word('завизжало', 6),
  pluralPast: Word('завизжали', 6),
  imperativeInformal: Word('завизжи', 6),
  imperativeFormal: Word('завизжите', 6),
  imperfect: [],
};

perfectVerbs.set(завизжать.name.text, завизжать);

export { завизжать };