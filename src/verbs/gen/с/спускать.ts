import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спускать: PerfectVerb = {
  name: Word('спускать', 5),
  singular1stPerson: Word('спускаю', 5),
  singular2ndPerson: Word('спускаешь', 5),
  singular3rdPerson: Word('спускает', 5),
  plural1stPerson: Word('спускаем', 5),
  plural2ndPerson: Word('спускаете', 5),
  plural3rdPerson: Word('спускают', 5),
  masculinePast: Word('спускал', 5),
  femininePast: Word('спускала', 5),
  neuterPast: Word('спускало', 5),
  pluralPast: Word('спускали', 5),
  imperativeInformal: Word('спускай', 5),
  imperativeFormal: Word('спускайте', 5),
  imperfect: [],
};

perfectVerbs.set(спускать.name.text, спускать);

export { спускать };