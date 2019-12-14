import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мариновать: PerfectVerb = {
  name: Word('мариновать', 7),
  singular1stPerson: Word('мариную', 5),
  singular2ndPerson: Word('маринуешь', 5),
  singular3rdPerson: Word('маринует', 5),
  plural1stPerson: Word('маринуем', 5),
  plural2ndPerson: Word('маринуете', 5),
  plural3rdPerson: Word('маринуют', 5),
  masculinePast: Word('мариновал', 7),
  femininePast: Word('мариновала', 7),
  neuterPast: Word('мариновало', 7),
  pluralPast: Word('мариновали', 7),
  imperativeInformal: Word('маринуй', 5),
  imperativeFormal: Word('маринуйте', 5),
  imperfect: [],
};

perfectVerbs.set(мариновать.name.text, мариновать);

export { мариновать };