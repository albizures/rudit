import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прострелить: PerfectVerb = {
  name: Word('прострелить', 8),
  singular1stPerson: Word('прострелю', 8),
  singular2ndPerson: Word('прострелишь', 6),
  singular3rdPerson: Word('прострелит', 6),
  plural1stPerson: Word('прострелим', 6),
  plural2ndPerson: Word('прострелите', 6),
  plural3rdPerson: Word('прострелят', 6),
  masculinePast: Word('прострелил', 8),
  femininePast: Word('прострелила', 8),
  neuterPast: Word('прострелило', 8),
  pluralPast: Word('прострелили', 8),
  imperativeInformal: Word('прострели', 8),
  imperativeFormal: Word('прострелите', 8),
  imperfect: [],
};

perfectVerbs.set(прострелить.name.text, прострелить);

export { прострелить };