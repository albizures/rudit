import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потревожить: PerfectVerb = {
  name: Word('потревожить', 6),
  singular1stPerson: Word('потревожу', 6),
  singular2ndPerson: Word('потревожишь', 6),
  singular3rdPerson: Word('потревожит', 6),
  plural1stPerson: Word('потревожим', 6),
  plural2ndPerson: Word('потревожите', 6),
  plural3rdPerson: Word('потревожат', 6),
  masculinePast: Word('потревожил', 6),
  femininePast: Word('потревожила', 6),
  neuterPast: Word('потревожило', 6),
  pluralPast: Word('потревожили', 6),
  imperativeInformal: Word('потревожь', 6),
  imperativeFormal: Word('потревожьте', 6),
  imperfect: [],
};

perfectVerbs.set(потревожить.name.text, потревожить);

export { потревожить };