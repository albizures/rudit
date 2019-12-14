import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запропаститься: PerfectVerb = {
  name: Word('запропаститься', 9),
  singular1stPerson: Word('запропащусь', 8),
  singular2ndPerson: Word('запропастишься', 9),
  singular3rdPerson: Word('запропастится', 9),
  plural1stPerson: Word('запропастимся', 9),
  plural2ndPerson: Word('запропаститесь', 9),
  plural3rdPerson: Word('запропастятся', 9),
  masculinePast: Word('запропастился', 9),
  femininePast: Word('запропастилась', 9),
  neuterPast: Word('запропастилось', 9),
  pluralPast: Word('запропастились', 9),
  imperativeInformal: Word('запропастись', 9),
  imperativeFormal: Word('запропаститесь', 9),
  imperfect: [],
};

perfectVerbs.set(запропаститься.name.text, запропаститься);

export { запропаститься };