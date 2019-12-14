import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const произноситься: PerfectVerb = {
  name: Word('произноситься', 8),
  singular1stPerson: Word('произношусь', 8),
  singular2ndPerson: Word('произносишься', 6),
  singular3rdPerson: Word('произносится', 6),
  plural1stPerson: Word('произносимся', 6),
  plural2ndPerson: Word('произноситесь', 6),
  plural3rdPerson: Word('произносятся', 6),
  masculinePast: Word('произносился', 8),
  femininePast: Word('произносилась', 8),
  neuterPast: Word('произносилось', 8),
  pluralPast: Word('произносились', 8),
  imperativeInformal: Word('произносись', 8),
  imperativeFormal: Word('произноситесь', 8),
  imperfect: ['произнестись'],
};

perfectVerbs.set(произноситься.name.text, произноситься);

export { произноситься };