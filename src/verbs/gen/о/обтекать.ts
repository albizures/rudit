import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтекать: PerfectVerb = {
  name: Word('обтекать', 5),
  singular1stPerson: Word('обтекаю', 5),
  singular2ndPerson: Word('обтекаешь', 5),
  singular3rdPerson: Word('обтекает', 5),
  plural1stPerson: Word('обтекаем', 5),
  plural2ndPerson: Word('обтекаете', 5),
  plural3rdPerson: Word('обтекают', 5),
  masculinePast: Word('обтекал', 5),
  femininePast: Word('обтекала', 5),
  neuterPast: Word('обтекало', 5),
  pluralPast: Word('обтекали', 5),
  imperativeInformal: Word('обтекай', 5),
  imperativeFormal: Word('обтекайте', 5),
  imperfect: [],
};

perfectVerbs.set(обтекать.name.text, обтекать);

export { обтекать };