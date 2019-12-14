import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таращиться: PerfectVerb = {
  name: Word('таращиться', 3),
  singular1stPerson: Word('таращусь', 3),
  singular2ndPerson: Word('таращишься', 3),
  singular3rdPerson: Word('таращится', 3),
  plural1stPerson: Word('таращимся', 3),
  plural2ndPerson: Word('таращитесь', 3),
  plural3rdPerson: Word('таращатся', 3),
  masculinePast: Word('таращился', 3),
  femininePast: Word('таращилась', 3),
  neuterPast: Word('таращилось', 3),
  pluralPast: Word('таращились', 3),
  imperativeInformal: Word('таращься', 3),
  imperativeFormal: Word('таращьтесь', 3),
  imperfect: ['вытаращиться'],
};

perfectVerbs.set(таращиться.name.text, таращиться);

export { таращиться };