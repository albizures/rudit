import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наглеть: PerfectVerb = {
  name: Word('наглеть', 4),
  singular1stPerson: Word('наглею', 4),
  singular2ndPerson: Word('наглеешь', 4),
  singular3rdPerson: Word('наглеет', 4),
  plural1stPerson: Word('наглеем', 4),
  plural2ndPerson: Word('наглеете', 4),
  plural3rdPerson: Word('наглеют', 4),
  masculinePast: Word('наглел', 4),
  femininePast: Word('наглела', 4),
  neuterPast: Word('наглело', 4),
  pluralPast: Word('наглели', 4),
  imperativeInformal: Word('наглей', 4),
  imperativeFormal: Word('наглейте', 4),
  imperfect: [],
};

perfectVerbs.set(наглеть.name.text, наглеть);

export { наглеть };