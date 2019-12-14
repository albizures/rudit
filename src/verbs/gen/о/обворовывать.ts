import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обворовывать: PerfectVerb = {
  name: Word('обворовывать', 5),
  singular1stPerson: Word('обворовываю', 5),
  singular2ndPerson: Word('обворовываешь', 5),
  singular3rdPerson: Word('обворовывает', 5),
  plural1stPerson: Word('обворовываем', 5),
  plural2ndPerson: Word('обворовываете', 5),
  plural3rdPerson: Word('обворовывают', 5),
  masculinePast: Word('обворовывал', 5),
  femininePast: Word('обворовывала', 5),
  neuterPast: Word('обворовывало', 5),
  pluralPast: Word('обворовывали', 5),
  imperativeInformal: Word('обворовывай', 5),
  imperativeFormal: Word('обворовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(обворовывать.name.text, обворовывать);

export { обворовывать };