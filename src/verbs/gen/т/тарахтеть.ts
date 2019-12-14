import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тарахтеть: PerfectVerb = {
  name: Word('тарахтеть', 6),
  singular1stPerson: Word('тарахчу', 6),
  singular2ndPerson: Word('тарахтишь', 6),
  singular3rdPerson: Word('тарахтит', 6),
  plural1stPerson: Word('тарахтим', 6),
  plural2ndPerson: Word('тарахтите', 6),
  plural3rdPerson: Word('тарахтят', 6),
  masculinePast: Word('тарахтел', 6),
  femininePast: Word('тарахтела', 6),
  neuterPast: Word('тарахтело', 6),
  pluralPast: Word('тарахтели', 6),
  imperativeInformal: Word('тарахти', 6),
  imperativeFormal: Word('тарахтите', 6),
  imperfect: [],
};

perfectVerbs.set(тарахтеть.name.text, тарахтеть);

export { тарахтеть };