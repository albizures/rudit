import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролежать: PerfectVerb = {
  name: Word('пролежать', 6),
  singular1stPerson: Word('пролежу', 6),
  singular2ndPerson: Word('пролежишь', 6),
  singular3rdPerson: Word('пролежит', 6),
  plural1stPerson: Word('пролежим', 6),
  plural2ndPerson: Word('пролежите', 6),
  plural3rdPerson: Word('пролежат', 6),
  masculinePast: Word('пролежал', 6),
  femininePast: Word('пролежала', 6),
  neuterPast: Word('пролежало', 6),
  pluralPast: Word('пролежали', 6),
  imperativeInformal: Word('пролежи', 6),
  imperativeFormal: Word('пролежите', 6),
  imperfect: [],
};

perfectVerbs.set(пролежать.name.text, пролежать);

export { пролежать };