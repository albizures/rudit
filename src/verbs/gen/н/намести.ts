import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намести: PerfectVerb = {
  name: Word('намести', 6),
  singular1stPerson: Word('намету', 5),
  singular2ndPerson: Word('наметёшь', 5),
  singular3rdPerson: Word('наметёт', 5),
  plural1stPerson: Word('наметём', 5),
  plural2ndPerson: Word('наметёте', 5),
  plural3rdPerson: Word('наметут', 5),
  masculinePast: Word('намёл', 3),
  femininePast: Word('намела', 5),
  neuterPast: Word('намело', 5),
  pluralPast: Word('намели', 5),
  imperativeInformal: Word('намети', 5),
  imperativeFormal: Word('наметите', 5),
  imperfect: [],
};

perfectVerbs.set(намести.name.text, намести);

export { намести };