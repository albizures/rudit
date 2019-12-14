import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсекать: PerfectVerb = {
  name: Word('обсекать', 5),
  singular1stPerson: Word('обсекаю', 5),
  singular2ndPerson: Word('обсекаешь', 5),
  singular3rdPerson: Word('обсекает', 5),
  plural1stPerson: Word('обсекаем', 5),
  plural2ndPerson: Word('обсекаете', 5),
  plural3rdPerson: Word('обсекают', 5),
  masculinePast: Word('обсекал', 5),
  femininePast: Word('обсекала', 5),
  neuterPast: Word('обсекало', 5),
  pluralPast: Word('обсекали', 5),
  imperativeInformal: Word('обсекай', 5),
  imperativeFormal: Word('обсекайте', 5),
  imperfect: [],
};

perfectVerbs.set(обсекать.name.text, обсекать);

export { обсекать };