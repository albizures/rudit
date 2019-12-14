import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажужжать: PerfectVerb = {
  name: Word('зажужжать', 6),
  singular1stPerson: Word('зажужжу', 6),
  singular2ndPerson: Word('зажужжишь', 6),
  singular3rdPerson: Word('зажужжит', 6),
  plural1stPerson: Word('зажужжим', 6),
  plural2ndPerson: Word('зажужжите', 6),
  plural3rdPerson: Word('зажужжат', 6),
  masculinePast: Word('зажужжал', 6),
  femininePast: Word('зажужжала', 6),
  neuterPast: Word('зажужжало', 6),
  pluralPast: Word('зажужжали', 6),
  imperativeInformal: Word('зажужжи', 6),
  imperativeFormal: Word('зажужжите', 6),
  imperfect: [],
};

perfectVerbs.set(зажужжать.name.text, зажужжать);

export { зажужжать };