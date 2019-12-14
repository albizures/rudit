import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тревожить: PerfectVerb = {
  name: Word('тревожить', 4),
  singular1stPerson: Word('тревожу', 4),
  singular2ndPerson: Word('тревожишь', 4),
  singular3rdPerson: Word('тревожит', 4),
  plural1stPerson: Word('тревожим', 4),
  plural2ndPerson: Word('тревожите', 4),
  plural3rdPerson: Word('тревожат', 4),
  masculinePast: Word('тревожил', 4),
  femininePast: Word('тревожила', 4),
  neuterPast: Word('тревожило', 4),
  pluralPast: Word('тревожили', 4),
  imperativeInformal: Word('тревожь', 4),
  imperativeFormal: Word('тревожьте', 4),
  imperfect: ['потревожить','встревожить'],
};

perfectVerbs.set(тревожить.name.text, тревожить);

export { тревожить };