import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытереться: PerfectVerb = {
  name: Word('вытереться', 1),
  singular1stPerson: Word('вытрусь', 1),
  singular2ndPerson: Word('вытрешься', 1),
  singular3rdPerson: Word('вытрется', 1),
  plural1stPerson: Word('вытремся', 1),
  plural2ndPerson: Word('вытретесь', 1),
  plural3rdPerson: Word('вытрутся', 1),
  masculinePast: Word('вытерся', 1),
  femininePast: Word('вытерлась', 1),
  neuterPast: Word('вытерлось', 1),
  pluralPast: Word('вытерлись', 1),
  imperativeInformal: Word('вытрись', 1),
  imperativeFormal: Word('вытритесь', 1),
  imperfect: [],
};

perfectVerbs.set(вытереться.name.text, вытереться);

export { вытереться };