import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнаглеть: PerfectVerb = {
  name: Word('обнаглеть', 6),
  singular1stPerson: Word('обнаглею', 6),
  singular2ndPerson: Word('обнаглеешь', 6),
  singular3rdPerson: Word('обнаглеет', 6),
  plural1stPerson: Word('обнаглеем', 6),
  plural2ndPerson: Word('обнаглеете', 6),
  plural3rdPerson: Word('обнаглеют', 6),
  masculinePast: Word('обнаглел', 6),
  femininePast: Word('обнаглела', 6),
  neuterPast: Word('обнаглело', 6),
  pluralPast: Word('обнаглели', 6),
  imperativeInformal: Word('обнаглей', 6),
  imperativeFormal: Word('обнаглейте', 6),
  imperfect: [],
};

perfectVerbs.set(обнаглеть.name.text, обнаглеть);

export { обнаглеть };