import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измучиться: PerfectVerb = {
  name: Word('измучиться', 3),
  singular1stPerson: Word('измучусь', 3),
  singular2ndPerson: Word('измучишься', 3),
  singular3rdPerson: Word('измучится', 3),
  plural1stPerson: Word('измучимся', 3),
  plural2ndPerson: Word('измучитесь', 3),
  plural3rdPerson: Word('измучатся', 3),
  masculinePast: Word('измучился', 3),
  femininePast: Word('измучилась', 3),
  neuterPast: Word('измучилось', 3),
  pluralPast: Word('измучились', 3),
  imperativeInformal: Word('измучься', 3),
  imperativeFormal: Word('измучьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(измучиться.name.text, измучиться);

export { измучиться };