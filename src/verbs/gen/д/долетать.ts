import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долетать: PerfectVerb = {
  name: Word('долетать', 5),
  singular1stPerson: Word('долетаю', 5),
  singular2ndPerson: Word('долетаешь', 5),
  singular3rdPerson: Word('долетает', 5),
  plural1stPerson: Word('долетаем', 5),
  plural2ndPerson: Word('долетаете', 5),
  plural3rdPerson: Word('долетают', 5),
  masculinePast: Word('долетал', 5),
  femininePast: Word('долетала', 5),
  neuterPast: Word('долетало', 5),
  pluralPast: Word('долетали', 5),
  imperativeInformal: Word('долетай', 5),
  imperativeFormal: Word('долетайте', 5),
  imperfect: [],
};

perfectVerbs.set(долетать.name.text, долетать);

export { долетать };