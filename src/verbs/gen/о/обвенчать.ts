import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвенчать: PerfectVerb = {
  name: Word('обвенчать', 6),
  singular1stPerson: Word('обвенчаю', 6),
  singular2ndPerson: Word('обвенчаешь', 6),
  singular3rdPerson: Word('обвенчает', 6),
  plural1stPerson: Word('обвенчаем', 6),
  plural2ndPerson: Word('обвенчаете', 6),
  plural3rdPerson: Word('обвенчают', 6),
  masculinePast: Word('обвенчал', 6),
  femininePast: Word('обвенчала', 6),
  neuterPast: Word('обвенчало', 6),
  pluralPast: Word('обвенчали', 6),
  imperativeInformal: Word('обвенчай', 6),
  imperativeFormal: Word('обвенчайте', 6),
  imperfect: [],
};

perfectVerbs.set(обвенчать.name.text, обвенчать);

export { обвенчать };