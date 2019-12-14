import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сморщиться: PerfectVerb = {
  name: Word('сморщиться', 2),
  singular1stPerson: Word('сморщусь', 2),
  singular2ndPerson: Word('сморщишься', 2),
  singular3rdPerson: Word('сморщится', 2),
  plural1stPerson: Word('сморщимся', 2),
  plural2ndPerson: Word('сморщитесь', 2),
  plural3rdPerson: Word('сморщатся', 2),
  masculinePast: Word('сморщился', 2),
  femininePast: Word('сморщилась', 2),
  neuterPast: Word('сморщилось', 2),
  pluralPast: Word('сморщились', 2),
  imperativeInformal: Word('сморщись//смо'рщься', 2),
  imperativeFormal: Word('сморщьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сморщиться.name.text, сморщиться);

export { сморщиться };