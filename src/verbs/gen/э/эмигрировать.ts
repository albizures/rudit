import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const эмигрировать: PerfectVerb = {
  name: Word('эмигрировать', 5),
  singular1stPerson: Word('эмигрирую', 5),
  singular2ndPerson: Word('эмигрируешь', 5),
  singular3rdPerson: Word('эмигрирует', 5),
  plural1stPerson: Word('эмигрируем', 5),
  plural2ndPerson: Word('эмигрируете', 5),
  plural3rdPerson: Word('эмигрируют', 5),
  masculinePast: Word('эмигрировал', 5),
  femininePast: Word('эмигрировала', 5),
  neuterPast: Word('эмигрировало', 5),
  pluralPast: Word('эмигрировали', 5),
  imperativeInformal: Word('эмигрируй', 5),
  imperativeFormal: Word('эмигрируйте', 5),
  imperfect: [],
};

perfectVerbs.set(эмигрировать.name.text, эмигрировать);

export { эмигрировать };