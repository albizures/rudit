import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проснуться: PerfectVerb = {
  name: Word('проснуться', 5),
  singular1stPerson: Word('проснусь', 5),
  singular2ndPerson: Word('проснёшься', 5),
  singular3rdPerson: Word('проснётся', 5),
  plural1stPerson: Word('проснёмся', 5),
  plural2ndPerson: Word('проснётесь', 5),
  plural3rdPerson: Word('проснутся', 5),
  masculinePast: Word('проснулся', 5),
  femininePast: Word('проснулась', 5),
  neuterPast: Word('проснулось', 5),
  pluralPast: Word('проснулись', 5),
  imperativeInformal: Word('проснись', 5),
  imperativeFormal: Word('проснитесь', 5),
  imperfect: ['просыпаться'],
};

perfectVerbs.set(проснуться.name.text, проснуться);

export { проснуться };