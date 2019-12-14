import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покряхтеть: PerfectVerb = {
  name: Word('покряхтеть', 7),
  singular1stPerson: Word('покряхчу', 7),
  singular2ndPerson: Word('покряхтишь', 7),
  singular3rdPerson: Word('покряхтит', 7),
  plural1stPerson: Word('покряхтим', 7),
  plural2ndPerson: Word('покряхтите', 7),
  plural3rdPerson: Word('покряхтят', 7),
  masculinePast: Word('покряхтел', 7),
  femininePast: Word('покряхтела', 7),
  neuterPast: Word('покряхтело', 7),
  pluralPast: Word('покряхтели', 7),
  imperativeInformal: Word('покряхти', 7),
  imperativeFormal: Word('покряхтите', 7),
  imperfect: [],
};

perfectVerbs.set(покряхтеть.name.text, покряхтеть);

export { покряхтеть };