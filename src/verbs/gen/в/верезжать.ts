import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const верезжать: PerfectVerb = {
  name: Word('верезжать', 6),
  singular1stPerson: Word('верезжу', 6),
  singular2ndPerson: Word('верезжишь', 6),
  singular3rdPerson: Word('верезжит', 6),
  plural1stPerson: Word('верезжим', 6),
  plural2ndPerson: Word('верезжите', 6),
  plural3rdPerson: Word('верезжат', 6),
  masculinePast: Word('верезжал', 6),
  femininePast: Word('верезжала', 6),
  neuterPast: Word('верезжало', 6),
  pluralPast: Word('верезжали', 6),
  imperativeInformal: Word('верезжи', 6),
  imperativeFormal: Word('верезжите', 6),
  imperfect: [],
};

perfectVerbs.set(верезжать.name.text, верезжать);

export { верезжать };