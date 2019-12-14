import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топорщиться: PerfectVerb = {
  name: Word('топорщиться', 3),
  singular1stPerson: Word('топорщусь', 3),
  singular2ndPerson: Word('топорщишься', 3),
  singular3rdPerson: Word('топорщится', 3),
  plural1stPerson: Word('топорщимся', 3),
  plural2ndPerson: Word('топорщитесь', 3),
  plural3rdPerson: Word('топорщатся', 3),
  masculinePast: Word('топорщился', 3),
  femininePast: Word('топорщилась', 3),
  neuterPast: Word('топорщилось', 3),
  pluralPast: Word('топорщились', 3),
  imperativeInformal: Word('топорщись//топо'рщься', 3),
  imperativeFormal: Word('топорщьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(топорщиться.name.text, топорщиться);

export { топорщиться };