import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const узреть: PerfectVerb = {
  name: Word('узреть', 3),
  singular1stPerson: Word('узрю', 3),
  singular2ndPerson: Word('узришь', 0),
  singular3rdPerson: Word('узрит', 0),
  plural1stPerson: Word('узрим', 0),
  plural2ndPerson: Word('узрите', 0),
  plural3rdPerson: Word('узрят', 0),
  masculinePast: Word('узрел', 3),
  femininePast: Word('узрела', 3),
  neuterPast: Word('узрело', 3),
  pluralPast: Word('узрели', 3),
  imperativeInformal: Word('узри', 3),
  imperativeFormal: Word('узрите', 3),
  imperfect: [],
};

perfectVerbs.set(узреть.name.text, узреть);

export { узреть };