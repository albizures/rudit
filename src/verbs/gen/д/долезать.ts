import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долезать: PerfectVerb = {
  name: Word('долезать', 5),
  singular1stPerson: Word('долезаю', 5),
  singular2ndPerson: Word('долезаешь', 5),
  singular3rdPerson: Word('долезает', 5),
  plural1stPerson: Word('долезаем', 5),
  plural2ndPerson: Word('долезаете', 5),
  plural3rdPerson: Word('долезают', 5),
  masculinePast: Word('долезал', 5),
  femininePast: Word('долезала', 5),
  neuterPast: Word('долезало', 5),
  pluralPast: Word('долезали', 5),
  imperativeInformal: Word('долезай', 5),
  imperativeFormal: Word('долезайте', 5),
  imperfect: [],
};

perfectVerbs.set(долезать.name.text, долезать);

export { долезать };