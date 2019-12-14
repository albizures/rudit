import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const светлеть: PerfectVerb = {
  name: Word('светлеть', 5),
  singular1stPerson: Word('светлею', 5),
  singular2ndPerson: Word('светлеешь', 5),
  singular3rdPerson: Word('светлеет', 5),
  plural1stPerson: Word('светлеем', 5),
  plural2ndPerson: Word('светлеете', 5),
  plural3rdPerson: Word('светлеют', 5),
  masculinePast: Word('светлел', 5),
  femininePast: Word('светлела', 5),
  neuterPast: Word('светлело', 5),
  pluralPast: Word('светлели', 5),
  imperativeInformal: Word('светлей', 5),
  imperativeFormal: Word('светлейте', 5),
  imperfect: [],
};

perfectVerbs.set(светлеть.name.text, светлеть);

export { светлеть };