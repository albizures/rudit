import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозреть: PerfectVerb = {
  name: Word('обозреть', 5),
  singular1stPerson: Word('обозрю', 5),
  singular2ndPerson: Word('обозришь', 5),
  singular3rdPerson: Word('обозрит', 5),
  plural1stPerson: Word('обозрим', 5),
  plural2ndPerson: Word('обозрите', 5),
  plural3rdPerson: Word('обозрят', 5),
  masculinePast: Word('обозрел', 5),
  femininePast: Word('обозрела', 5),
  neuterPast: Word('обозрело', 5),
  pluralPast: Word('обозрели', 5),
  imperativeInformal: Word('обозри', 5),
  imperativeFormal: Word('обозрите', 5),
  imperfect: [],
};

perfectVerbs.set(обозреть.name.text, обозреть);

export { обозреть };