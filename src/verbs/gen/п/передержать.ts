import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передержать: PerfectVerb = {
  name: Word('передержать', 8),
  singular1stPerson: Word('передержу', 8),
  singular2ndPerson: Word('передержишь', 5),
  singular3rdPerson: Word('передержит', 5),
  plural1stPerson: Word('передержим', 5),
  plural2ndPerson: Word('передержите', 5),
  plural3rdPerson: Word('передержат', 5),
  masculinePast: Word('передержал', 8),
  femininePast: Word('передержала', 8),
  neuterPast: Word('передержало', 8),
  pluralPast: Word('передержали', 8),
  imperativeInformal: Word('передержи', 8),
  imperativeFormal: Word('передержите', 8),
  imperfect: [],
};

perfectVerbs.set(передержать.name.text, передержать);

export { передержать };