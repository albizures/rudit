import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарваться: PerfectVerb = {
  name: Word('нарваться', 4),
  singular1stPerson: Word('нарвусь', 4),
  singular2ndPerson: Word('нарвёшься', 1),
  singular3rdPerson: Word('нарвётся', 1),
  plural1stPerson: Word('нарвёмся', 1),
  plural2ndPerson: Word('нарвётесь', 1),
  plural3rdPerson: Word('нарвутся', 4),
  masculinePast: Word('нарвался', 4),
  femininePast: Word('нарвалась', 6),
  neuterPast: Word('нарвалось//нарвало'сь', 4),
  pluralPast: Word('нарвались//нарвали'сь', 4),
  imperativeInformal: Word('нарвись', 4),
  imperativeFormal: Word('нарвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(нарваться.name.text, нарваться);

export { нарваться };