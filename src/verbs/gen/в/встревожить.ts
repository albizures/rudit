import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встревожить: PerfectVerb = {
  name: Word('встревожить', 6),
  singular1stPerson: Word('встревожу', 6),
  singular2ndPerson: Word('встревожишь', 6),
  singular3rdPerson: Word('встревожит', 6),
  plural1stPerson: Word('встревожим', 6),
  plural2ndPerson: Word('встревожите', 6),
  plural3rdPerson: Word('встревожат', 6),
  masculinePast: Word('встревожил', 6),
  femininePast: Word('встревожила', 6),
  neuterPast: Word('встревожило', 6),
  pluralPast: Word('встревожили', 6),
  imperativeInformal: Word('встревожь', 6),
  imperativeFormal: Word('встревожьте', 6),
  imperfect: [],
};

perfectVerbs.set(встревожить.name.text, встревожить);

export { встревожить };