import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проехаться: PerfectVerb = {
  name: Word('проехаться', 3),
  singular1stPerson: Word('проедусь', 3),
  singular2ndPerson: Word('проедешься', 3),
  singular3rdPerson: Word('проедется', 3),
  plural1stPerson: Word('проедемся', 3),
  plural2ndPerson: Word('проедетесь', 3),
  plural3rdPerson: Word('проедутся', 3),
  masculinePast: Word('проехался', 3),
  femininePast: Word('проехалась', 3),
  neuterPast: Word('проехалось', 3),
  pluralPast: Word('проехались', 3),
  imperativeInformal: Word('-ся', 2),
  imperativeFormal: Word('-ся', 2),
  imperfect: [],
};

perfectVerbs.set(проехаться.name.text, проехаться);

export { проехаться };