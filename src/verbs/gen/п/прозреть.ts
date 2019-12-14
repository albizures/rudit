import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозреть: PerfectVerb = {
  name: Word('прозреть', 5),
  singular1stPerson: Word('прозрю', 5),
  singular2ndPerson: Word('прозришь', 5),
  singular3rdPerson: Word('прозрит', 5),
  plural1stPerson: Word('прозрим', 5),
  plural2ndPerson: Word('прозрите', 5),
  plural3rdPerson: Word('прозрят', 5),
  masculinePast: Word('прозрел', 5),
  femininePast: Word('прозрела', 5),
  neuterPast: Word('прозрело', 5),
  pluralPast: Word('прозрели', 5),
  imperativeInformal: Word('прозри', 5),
  imperativeFormal: Word('прозрите', 5),
  imperfect: [],
};

perfectVerbs.set(прозреть.name.text, прозреть);

export { прозреть };