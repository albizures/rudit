import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сообщиться: PerfectVerb = {
  name: Word('сообщиться', 5),
  singular1stPerson: Word('сообщусь', 5),
  singular2ndPerson: Word('сообщишься', 5),
  singular3rdPerson: Word('сообщится', 5),
  plural1stPerson: Word('сообщимся', 5),
  plural2ndPerson: Word('сообщитесь', 5),
  plural3rdPerson: Word('сообщатся', 5),
  masculinePast: Word('сообщился', 5),
  femininePast: Word('сообщилась', 5),
  neuterPast: Word('сообщилось', 5),
  pluralPast: Word('сообщились', 5),
  imperativeInformal: Word('сообщись', 5),
  imperativeFormal: Word('сообщитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сообщиться.name.text, сообщиться);

export { сообщиться };