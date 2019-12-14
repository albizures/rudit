import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тлеть: PerfectVerb = {
  name: Word('тлеть', 2),
  singular1stPerson: Word('тлею', 2),
  singular2ndPerson: Word('тлеешь', 2),
  singular3rdPerson: Word('тлеет', 2),
  plural1stPerson: Word('тлеем', 2),
  plural2ndPerson: Word('тлеете', 2),
  plural3rdPerson: Word('тлеют', 2),
  masculinePast: Word('тлел', 2),
  femininePast: Word('тлела', 2),
  neuterPast: Word('тлело', 2),
  pluralPast: Word('тлели', 2),
  imperativeInformal: Word('тлей', 2),
  imperativeFormal: Word('тлейте', 2),
  imperfect: ['истлеть'],
};

perfectVerbs.set(тлеть.name.text, тлеть);

export { тлеть };