import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завидеть: PerfectVerb = {
  name: Word('завидеть', 3),
  singular1stPerson: Word('завижу', 3),
  singular2ndPerson: Word('завидишь', 3),
  singular3rdPerson: Word('завидит', 3),
  plural1stPerson: Word('завидим', 3),
  plural2ndPerson: Word('завидите', 3),
  plural3rdPerson: Word('завидят', 3),
  masculinePast: Word('завидел', 3),
  femininePast: Word('завидела', 3),
  neuterPast: Word('завидело', 3),
  pluralPast: Word('завидели', 3),
  imperativeInformal: Word('завидь', 3),
  imperativeFormal: Word('завидьте', 3),
  imperfect: [],
};

perfectVerbs.set(завидеть.name.text, завидеть);

export { завидеть };