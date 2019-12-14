import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезголосеть: PerfectVerb = {
  name: Word('обезголосеть', 7),
  singular1stPerson: Word('обезголосею', 7),
  singular2ndPerson: Word('обезголосеешь', 7),
  singular3rdPerson: Word('обезголосеет', 7),
  plural1stPerson: Word('обезголосеем', 7),
  plural2ndPerson: Word('обезголосеете', 7),
  plural3rdPerson: Word('обезголосеют', 7),
  masculinePast: Word('обезголосел', 7),
  femininePast: Word('обезголосела', 7),
  neuterPast: Word('обезголосело', 7),
  pluralPast: Word('обезголосели', 7),
  imperativeInformal: Word('обезголосей', 7),
  imperativeFormal: Word('обезголосейте', 7),
  imperfect: [],
};

perfectVerbs.set(обезголосеть.name.text, обезголосеть);

export { обезголосеть };