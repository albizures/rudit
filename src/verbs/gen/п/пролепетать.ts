import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролепетать: PerfectVerb = {
  name: Word('пролепетать', 8),
  singular1stPerson: Word('пролепечу', 8),
  singular2ndPerson: Word('пролепечешь', 6),
  singular3rdPerson: Word('пролепечет', 6),
  plural1stPerson: Word('пролепечем', 6),
  plural2ndPerson: Word('пролепечете', 6),
  plural3rdPerson: Word('пролепечут', 6),
  masculinePast: Word('пролепетал', 8),
  femininePast: Word('пролепетала', 8),
  neuterPast: Word('пролепетало', 8),
  pluralPast: Word('пролепетали', 8),
  imperativeInformal: Word('пролепечи', 8),
  imperativeFormal: Word('пролепечите', 8),
  imperfect: [],
};

perfectVerbs.set(пролепетать.name.text, пролепетать);

export { пролепетать };