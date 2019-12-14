import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const призреть: PerfectVerb = {
  name: Word('призреть', 5),
  singular1stPerson: Word('призрю', 5),
  singular2ndPerson: Word('призришь', 2),
  singular3rdPerson: Word('призрит', 2),
  plural1stPerson: Word('призрим', 2),
  plural2ndPerson: Word('призрите', 2),
  plural3rdPerson: Word('призрят', 2),
  masculinePast: Word('призрел', 5),
  femininePast: Word('призрела', 5),
  neuterPast: Word('призрело', 5),
  pluralPast: Word('призрели', 5),
  imperativeInformal: Word('призри', 5),
  imperativeFormal: Word('призрите', 5),
  imperfect: [],
};

perfectVerbs.set(призреть.name.text, призреть);

export { призреть };