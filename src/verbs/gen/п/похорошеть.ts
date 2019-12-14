import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похорошеть: PerfectVerb = {
  name: Word('похорошеть', 7),
  singular1stPerson: Word('похорошею', 7),
  singular2ndPerson: Word('похорошеешь', 7),
  singular3rdPerson: Word('похорошеет', 7),
  plural1stPerson: Word('похорошеем', 7),
  plural2ndPerson: Word('похорошеете', 7),
  plural3rdPerson: Word('похорошеют', 7),
  masculinePast: Word('похорошел', 7),
  femininePast: Word('похорошела', 7),
  neuterPast: Word('похорошело', 7),
  pluralPast: Word('похорошели', 7),
  imperativeInformal: Word('похорошей', 7),
  imperativeFormal: Word('похорошейте', 7),
  imperfect: [],
};

perfectVerbs.set(похорошеть.name.text, похорошеть);

export { похорошеть };