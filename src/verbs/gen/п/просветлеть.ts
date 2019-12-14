import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просветлеть: PerfectVerb = {
  name: Word('просветлеть', 8),
  singular1stPerson: Word('просветлею', 8),
  singular2ndPerson: Word('просветлеешь', 8),
  singular3rdPerson: Word('просветлеет', 8),
  plural1stPerson: Word('просветлеем', 8),
  plural2ndPerson: Word('просветлеете', 8),
  plural3rdPerson: Word('просветлеют', 8),
  masculinePast: Word('просветлел', 8),
  femininePast: Word('просветлела', 8),
  neuterPast: Word('просветлело', 8),
  pluralPast: Word('просветлели', 8),
  imperativeInformal: Word('просветлей', 8),
  imperativeFormal: Word('просветлейте', 8),
  imperfect: [],
};

perfectVerbs.set(просветлеть.name.text, просветлеть);

export { просветлеть };