import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажраться: PerfectVerb = {
  name: Word('нажраться', 4),
  singular1stPerson: Word('нажрусь', 4),
  singular2ndPerson: Word('нажрёшься', 1),
  singular3rdPerson: Word('нажрётся', 1),
  plural1stPerson: Word('нажрёмся', 1),
  plural2ndPerson: Word('нажрётесь', 1),
  plural3rdPerson: Word('нажрутся', 4),
  masculinePast: Word('нажрался', 4),
  femininePast: Word('нажралась', 6),
  neuterPast: Word('нажралось//нажрало'сь', 4),
  pluralPast: Word('нажрались//нажрали'сь', 4),
  imperativeInformal: Word('нажрись', 4),
  imperativeFormal: Word('нажритесь', 4),
  imperfect: [],
};

perfectVerbs.set(нажраться.name.text, нажраться);

export { нажраться };