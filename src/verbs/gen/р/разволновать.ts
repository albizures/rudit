import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разволновать: PerfectVerb = {
  name: Word('разволновать', 9),
  singular1stPerson: Word('разволную', 7),
  singular2ndPerson: Word('разволнуешь', 7),
  singular3rdPerson: Word('разволнует', 7),
  plural1stPerson: Word('разволнуем', 7),
  plural2ndPerson: Word('разволнуете', 7),
  plural3rdPerson: Word('разволнуют', 7),
  masculinePast: Word('разволновал', 9),
  femininePast: Word('разволновала', 9),
  neuterPast: Word('разволновало', 9),
  pluralPast: Word('разволновали', 9),
  imperativeInformal: Word('разволнуй', 7),
  imperativeFormal: Word('разволнуйте', 7),
  imperfect: [],
};

perfectVerbs.set(разволновать.name.text, разволновать);

export { разволновать };