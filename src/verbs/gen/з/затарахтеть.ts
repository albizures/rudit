import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затарахтеть: PerfectVerb = {
  name: Word('затарахтеть', 8),
  singular1stPerson: Word('затарахчу', 8),
  singular2ndPerson: Word('затарахтишь', 8),
  singular3rdPerson: Word('затарахтит', 8),
  plural1stPerson: Word('затарахтим', 8),
  plural2ndPerson: Word('затарахтите', 8),
  plural3rdPerson: Word('затарахтят', 8),
  masculinePast: Word('затарахтел', 8),
  femininePast: Word('затарахтела', 8),
  neuterPast: Word('затарахтело', 8),
  pluralPast: Word('затарахтели', 8),
  imperativeInformal: Word('затарахти', 8),
  imperativeFormal: Word('затарахтите', 8),
  imperfect: [],
};

perfectVerbs.set(затарахтеть.name.text, затарахтеть);

export { затарахтеть };