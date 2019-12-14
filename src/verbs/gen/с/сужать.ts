import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сужать: PerfectVerb = {
  name: Word('сужать', 3),
  singular1stPerson: Word('сужаю', 3),
  singular2ndPerson: Word('сужаешь', 3),
  singular3rdPerson: Word('сужает', 3),
  plural1stPerson: Word('сужаем', 3),
  plural2ndPerson: Word('сужаете', 3),
  plural3rdPerson: Word('сужают', 3),
  masculinePast: Word('сужал', 3),
  femininePast: Word('сужала', 3),
  neuterPast: Word('сужало', 3),
  pluralPast: Word('сужали', 3),
  imperativeInformal: Word('сужай', 3),
  imperativeFormal: Word('сужайте', 3),
  imperfect: [],
};

perfectVerbs.set(сужать.name.text, сужать);

export { сужать };