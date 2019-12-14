import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огласиться: PerfectVerb = {
  name: Word('огласиться', 5),
  singular1stPerson: Word('оглашусь', 5),
  singular2ndPerson: Word('огласишься', 5),
  singular3rdPerson: Word('огласится', 5),
  plural1stPerson: Word('огласимся', 5),
  plural2ndPerson: Word('огласитесь', 5),
  plural3rdPerson: Word('огласятся', 5),
  masculinePast: Word('огласился', 5),
  femininePast: Word('огласилась', 5),
  neuterPast: Word('огласилось', 5),
  pluralPast: Word('огласились', 5),
  imperativeInformal: Word('огласись', 5),
  imperativeFormal: Word('огласитесь', 5),
  imperfect: [],
};

perfectVerbs.set(огласиться.name.text, огласиться);

export { огласиться };