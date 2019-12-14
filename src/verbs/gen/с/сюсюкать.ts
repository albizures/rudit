import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сюсюкать: PerfectVerb = {
  name: Word('сюсюкать', 3),
  singular1stPerson: Word('сюсюкаю', 3),
  singular2ndPerson: Word('сюсюкаешь', 3),
  singular3rdPerson: Word('сюсюкает', 3),
  plural1stPerson: Word('сюсюкаем', 3),
  plural2ndPerson: Word('сюсюкаете', 3),
  plural3rdPerson: Word('сюсюкают', 3),
  masculinePast: Word('сюсюкал', 3),
  femininePast: Word('сюсюкала', 3),
  neuterPast: Word('сюсюкало', 3),
  pluralPast: Word('сюсюкали', 3),
  imperativeInformal: Word('сюсюкай', 3),
  imperativeFormal: Word('сюсюкайте', 3),
  imperfect: [],
};

perfectVerbs.set(сюсюкать.name.text, сюсюкать);

export { сюсюкать };