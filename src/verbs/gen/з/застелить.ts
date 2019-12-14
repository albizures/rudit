import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застелить: PerfectVerb = {
  name: Word('застелить', 6),
  singular1stPerson: Word('застелю', 6),
  singular2ndPerson: Word('застелишь', 4),
  singular3rdPerson: Word('застелит', 4),
  plural1stPerson: Word('застелим', 4),
  plural2ndPerson: Word('застелите', 4),
  plural3rdPerson: Word('застелят', 4),
  masculinePast: Word('застелил', 6),
  femininePast: Word('застелила', 6),
  neuterPast: Word('застелило', 6),
  pluralPast: Word('застелили', 6),
  imperativeInformal: Word('застели', 6),
  imperativeFormal: Word('застелите', 6),
  imperfect: [],
};

perfectVerbs.set(застелить.name.text, застелить);

export { застелить };