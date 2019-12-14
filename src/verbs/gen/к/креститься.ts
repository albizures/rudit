import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const креститься: PerfectVerb = {
  name: Word('креститься', 5),
  singular1stPerson: Word('крещусь', 4),
  singular2ndPerson: Word('крестишься', 2),
  singular3rdPerson: Word('крестится', 2),
  plural1stPerson: Word('крестимся', 2),
  plural2ndPerson: Word('креститесь', 2),
  plural3rdPerson: Word('крестятся', 2),
  masculinePast: Word('крестился', 5),
  femininePast: Word('крестилась', 5),
  neuterPast: Word('крестилось', 5),
  pluralPast: Word('крестились', 5),
  imperativeInformal: Word('крестись', 5),
  imperativeFormal: Word('креститесь', 5),
  imperfect: ['окреститься','перекреститься'],
};

perfectVerbs.set(креститься.name.text, креститься);

export { креститься };