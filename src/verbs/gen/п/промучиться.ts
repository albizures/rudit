import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промучиться: PerfectVerb = {
  name: Word('промучиться', 4),
  singular1stPerson: Word('промучусь', 4),
  singular2ndPerson: Word('промучишься', 4),
  singular3rdPerson: Word('промучится', 4),
  plural1stPerson: Word('промучимся', 4),
  plural2ndPerson: Word('промучитесь', 4),
  plural3rdPerson: Word('промучатся', 4),
  masculinePast: Word('промучился', 4),
  femininePast: Word('промучилась', 4),
  neuterPast: Word('промучилось', 4),
  pluralPast: Word('промучились', 4),
  imperativeInformal: Word('промучься', 4),
  imperativeFormal: Word('промучьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(промучиться.name.text, промучиться);

export { промучиться };