import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соскучиться: PerfectVerb = {
  name: Word('соскучиться', 4),
  singular1stPerson: Word('соскучусь', 4),
  singular2ndPerson: Word('соскушься', 4),
  singular3rdPerson: Word('соскучится', 4),
  plural1stPerson: Word('соскучимся', 4),
  plural2ndPerson: Word('соскучитесь', 4),
  plural3rdPerson: Word('соскучатся', 4),
  masculinePast: Word('соскучился', 4),
  femininePast: Word('соскучилась', 4),
  neuterPast: Word('соскучилось', 4),
  pluralPast: Word('соскучились', 4),
  imperativeInformal: Word('соскучься', 4),
  imperativeFormal: Word('соскучьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(соскучиться.name.text, соскучиться);

export { соскучиться };