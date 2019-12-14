import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промариновать: PerfectVerb = {
  name: Word('промариновать', 10),
  singular1stPerson: Word('промариную', 8),
  singular2ndPerson: Word('промаринуешь', 8),
  singular3rdPerson: Word('промаринует', 8),
  plural1stPerson: Word('промаринуем', 8),
  plural2ndPerson: Word('промаринуете', 8),
  plural3rdPerson: Word('промаринуют', 8),
  masculinePast: Word('промариновал', 10),
  femininePast: Word('промариновала', 10),
  neuterPast: Word('промариновало', 10),
  pluralPast: Word('промариновали', 10),
  imperativeInformal: Word('промаринуй', 8),
  imperativeFormal: Word('промаринуйте', 8),
  imperfect: [],
};

perfectVerbs.set(промариновать.name.text, промариновать);

export { промариновать };