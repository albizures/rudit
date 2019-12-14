import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завершиться: PerfectVerb = {
  name: Word('завершиться', 6),
  singular1stPerson: Word('завершусь', 6),
  singular2ndPerson: Word('завершишься', 6),
  singular3rdPerson: Word('завершится', 6),
  plural1stPerson: Word('завершимся', 6),
  plural2ndPerson: Word('завершитесь', 6),
  plural3rdPerson: Word('завершатся', 6),
  masculinePast: Word('завершился', 6),
  femininePast: Word('завершилась', 6),
  neuterPast: Word('завершилось', 6),
  pluralPast: Word('завершились', 6),
  imperativeInformal: Word('завершись', 6),
  imperativeFormal: Word('завершитесь', 6),
  imperfect: [],
};

perfectVerbs.set(завершиться.name.text, завершиться);

export { завершиться };