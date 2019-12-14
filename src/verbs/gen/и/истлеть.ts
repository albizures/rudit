import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истлеть: PerfectVerb = {
  name: Word('истлеть', 4),
  singular1stPerson: Word('истлею', 4),
  singular2ndPerson: Word('истлеешь', 4),
  singular3rdPerson: Word('истлеет', 4),
  plural1stPerson: Word('истлеем', 4),
  plural2ndPerson: Word('истлеете', 4),
  plural3rdPerson: Word('истлеют', 4),
  masculinePast: Word('истлел', 4),
  femininePast: Word('истлела', 4),
  neuterPast: Word('истлело', 4),
  pluralPast: Word('истлели', 4),
  imperativeInformal: Word('истлей', 4),
  imperativeFormal: Word('истлейте', 4),
  imperfect: [],
};

perfectVerbs.set(истлеть.name.text, истлеть);

export { истлеть };