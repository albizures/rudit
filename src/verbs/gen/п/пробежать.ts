import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробежать: PerfectVerb = {
  name: Word('пробежать', 6),
  singular1stPerson: Word('пробегу', 6),
  singular2ndPerson: Word('пробежишь', 6),
  singular3rdPerson: Word('пробежит', 6),
  plural1stPerson: Word('пробежим', 6),
  plural2ndPerson: Word('пробежите', 6),
  plural3rdPerson: Word('пробегут', 6),
  masculinePast: Word('пробежал', 6),
  femininePast: Word('пробежала', 6),
  neuterPast: Word('пробежало', 6),
  pluralPast: Word('пробежали', 6),
  imperativeInformal: Word('пробеги', 6),
  imperativeFormal: Word('пробегите', 6),
  imperfect: [],
};

perfectVerbs.set(пробежать.name.text, пробежать);

export { пробежать };