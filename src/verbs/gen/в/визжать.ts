import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const визжать: PerfectVerb = {
  name: Word('визжать', 4),
  singular1stPerson: Word('визжу', 4),
  singular2ndPerson: Word('визжишь', 4),
  singular3rdPerson: Word('визжит', 4),
  plural1stPerson: Word('визжим', 4),
  plural2ndPerson: Word('визжите', 4),
  plural3rdPerson: Word('визжат', 4),
  masculinePast: Word('визжал', 4),
  femininePast: Word('визжала', 4),
  neuterPast: Word('визжало', 4),
  pluralPast: Word('визжали', 4),
  imperativeInformal: Word('визжи', 4),
  imperativeFormal: Word('визжите', 4),
  imperfect: [],
};

perfectVerbs.set(визжать.name.text, визжать);

export { визжать };