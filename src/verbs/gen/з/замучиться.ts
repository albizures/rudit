import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замучиться: PerfectVerb = {
  name: Word('замучиться', 3),
  singular1stPerson: Word('замучусь', 3),
  singular2ndPerson: Word('замучишься', 3),
  singular3rdPerson: Word('замучится', 3),
  plural1stPerson: Word('замучимся', 3),
  plural2ndPerson: Word('замучитесь', 3),
  plural3rdPerson: Word('замучатся', 3),
  masculinePast: Word('замучился', 3),
  femininePast: Word('замучилась', 3),
  neuterPast: Word('замучилось', 3),
  pluralPast: Word('замучились', 3),
  imperativeInformal: Word('замучься', 3),
  imperativeFormal: Word('замучьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замучиться.name.text, замучиться);

export { замучиться };