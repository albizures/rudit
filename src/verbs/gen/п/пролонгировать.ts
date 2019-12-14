import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролонгировать: PerfectVerb = {
  name: Word('пролонгировать', 7),
  singular1stPerson: Word('пролонгирую', 7),
  singular2ndPerson: Word('пролонгируешь', 7),
  singular3rdPerson: Word('пролонгирует', 7),
  plural1stPerson: Word('пролонгируем', 7),
  plural2ndPerson: Word('пролонгируете', 7),
  plural3rdPerson: Word('пролонгируют', 7),
  masculinePast: Word('пролонгировал', 7),
  femininePast: Word('пролонгировала', 7),
  neuterPast: Word('пролонгировало', 7),
  pluralPast: Word('пролонгировали', 7),
  imperativeInformal: Word('пролонгируй', 7),
  imperativeFormal: Word('пролонгируйте', 7),
  imperfect: [],
};

perfectVerbs.set(пролонгировать.name.text, пролонгировать);

export { пролонгировать };