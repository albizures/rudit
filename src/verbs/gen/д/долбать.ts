import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долбать: PerfectVerb = {
  name: Word('долбать', 4),
  singular1stPerson: Word('долбаю', 4),
  singular2ndPerson: Word('долбаешь', 4),
  singular3rdPerson: Word('долбает', 4),
  plural1stPerson: Word('долбаем', 4),
  plural2ndPerson: Word('долбаете', 4),
  plural3rdPerson: Word('долбают', 4),
  masculinePast: Word('долбал', 4),
  femininePast: Word('долбала', 4),
  neuterPast: Word('долбало', 4),
  pluralPast: Word('долбали', 4),
  imperativeInformal: Word('долбай', 4),
  imperativeFormal: Word('долбайте', 4),
  imperfect: [],
};

perfectVerbs.set(долбать.name.text, долбать);

export { долбать };