import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подытожить: PerfectVerb = {
  name: Word('подытожить', 5),
  singular1stPerson: Word('подытожу', 5),
  singular2ndPerson: Word('подытожишь', 5),
  singular3rdPerson: Word('подытожит', 5),
  plural1stPerson: Word('подытожим', 5),
  plural2ndPerson: Word('подытожите', 5),
  plural3rdPerson: Word('подытожат', 5),
  masculinePast: Word('подытожил', 5),
  femininePast: Word('подытожила', 5),
  neuterPast: Word('подытожило', 5),
  pluralPast: Word('подытожили', 5),
  imperativeInformal: Word('подытожь', 5),
  imperativeFormal: Word('подытожьте', 5),
  imperfect: [],
};

perfectVerbs.set(подытожить.name.text, подытожить);

export { подытожить };