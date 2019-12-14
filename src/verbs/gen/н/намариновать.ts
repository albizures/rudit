import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намариновать: PerfectVerb = {
  name: Word('намариновать', 9),
  singular1stPerson: Word('намариную', 7),
  singular2ndPerson: Word('намаринуешь', 7),
  singular3rdPerson: Word('намаринует', 7),
  plural1stPerson: Word('намаринуем', 7),
  plural2ndPerson: Word('намаринуете', 7),
  plural3rdPerson: Word('намаринуют', 7),
  masculinePast: Word('намариновал', 9),
  femininePast: Word('намариновала', 9),
  neuterPast: Word('намариновало', 9),
  pluralPast: Word('намариновали', 9),
  imperativeInformal: Word('намаринуй', 7),
  imperativeFormal: Word('намаринуйте', 7),
  imperfect: [],
};

perfectVerbs.set(намариновать.name.text, намариновать);

export { намариновать };