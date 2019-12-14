import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мучиться: PerfectVerb = {
  name: Word('мучиться', 1),
  singular1stPerson: Word('мучусь', 1),
  singular2ndPerson: Word('мучишься', 1),
  singular3rdPerson: Word('мучится', 1),
  plural1stPerson: Word('мучимся', 1),
  plural2ndPerson: Word('мучитесь', 1),
  plural3rdPerson: Word('мучатся', 1),
  masculinePast: Word('мучился', 1),
  femininePast: Word('мучилась', 1),
  neuterPast: Word('мучилось', 1),
  pluralPast: Word('мучились', 1),
  imperativeInformal: Word('мучься', 1),
  imperativeFormal: Word('мучьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(мучиться.name.text, мучиться);

export { мучиться };