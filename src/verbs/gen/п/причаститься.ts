import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причаститься: PerfectVerb = {
  name: Word('причаститься', 7),
  singular1stPerson: Word('причащусь', 6),
  singular2ndPerson: Word('причастишься', 7),
  singular3rdPerson: Word('причастится', 7),
  plural1stPerson: Word('причастимся', 7),
  plural2ndPerson: Word('причаститесь', 7),
  plural3rdPerson: Word('причастятся', 7),
  masculinePast: Word('причастился', 7),
  femininePast: Word('причастилась', 7),
  neuterPast: Word('причастилось', 7),
  pluralPast: Word('причастились', 7),
  imperativeInformal: Word('причастись', 7),
  imperativeFormal: Word('причаститесь', 7),
  imperfect: [],
};

perfectVerbs.set(причаститься.name.text, причаститься);

export { причаститься };