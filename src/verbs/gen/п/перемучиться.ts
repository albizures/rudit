import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемучиться: PerfectVerb = {
  name: Word('перемучиться', 5),
  singular1stPerson: Word('перемучусь', 5),
  singular2ndPerson: Word('перемучишься', 5),
  singular3rdPerson: Word('перемучится', 5),
  plural1stPerson: Word('перемучимся', 5),
  plural2ndPerson: Word('перемучитесь', 5),
  plural3rdPerson: Word('перемучатся', 5),
  masculinePast: Word('перемучился', 5),
  femininePast: Word('перемучилась', 5),
  neuterPast: Word('перемучилось', 5),
  pluralPast: Word('перемучились', 5),
  imperativeInformal: Word('перемучься', 5),
  imperativeFormal: Word('перемучьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перемучиться.name.text, перемучиться);

export { перемучиться };