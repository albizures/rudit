import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухлопать: PerfectVerb = {
  name: Word('ухлопать', 3),
  singular1stPerson: Word('ухлопаю', 3),
  singular2ndPerson: Word('ухлопаешь', 3),
  singular3rdPerson: Word('ухлопает', 3),
  plural1stPerson: Word('ухлопаем', 3),
  plural2ndPerson: Word('ухлопаете', 3),
  plural3rdPerson: Word('ухлопают', 3),
  masculinePast: Word('ухлопал', 3),
  femininePast: Word('ухлопала', 3),
  neuterPast: Word('ухлопало', 3),
  pluralPast: Word('ухлопали', 3),
  imperativeInformal: Word('ухлопай', 3),
  imperativeFormal: Word('ухлопайте', 3),
  imperfect: [],
};

perfectVerbs.set(ухлопать.name.text, ухлопать);

export { ухлопать };