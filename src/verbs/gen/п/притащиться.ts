import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притащиться: PerfectVerb = {
  name: Word('притащиться', 6),
  singular1stPerson: Word('притащусь', 6),
  singular2ndPerson: Word('притащишься', 4),
  singular3rdPerson: Word('притащится', 4),
  plural1stPerson: Word('притащимся', 4),
  plural2ndPerson: Word('притащитесь', 4),
  plural3rdPerson: Word('притащатся', 4),
  masculinePast: Word('притащился', 6),
  femininePast: Word('притащилась', 6),
  neuterPast: Word('притащилось', 6),
  pluralPast: Word('притащились', 6),
  imperativeInformal: Word('притащись', 6),
  imperativeFormal: Word('притащитесь', 6),
  imperfect: [],
};

perfectVerbs.set(притащиться.name.text, притащиться);

export { притащиться };