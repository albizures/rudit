import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прекратиться: PerfectVerb = {
  name: Word('прекратиться', 7),
  singular1stPerson: Word('прекращусь', 7),
  singular2ndPerson: Word('прекратишься', 7),
  singular3rdPerson: Word('прекратится', 7),
  plural1stPerson: Word('прекратимся', 7),
  plural2ndPerson: Word('прекратитесь', 7),
  plural3rdPerson: Word('прекратятся', 7),
  masculinePast: Word('прекратился', 7),
  femininePast: Word('прекратилась', 7),
  neuterPast: Word('прекратилось', 7),
  pluralPast: Word('прекратились', 7),
  imperativeInformal: Word('прекратись', 7),
  imperativeFormal: Word('прекратитесь', 7),
  imperfect: ['прекращаться'],
};

perfectVerbs.set(прекратиться.name.text, прекратиться);

export { прекратиться };