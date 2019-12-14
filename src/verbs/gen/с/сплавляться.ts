import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплавляться: PerfectVerb = {
  name: Word('сплавляться', 6),
  singular1stPerson: Word('сплавляюсь', 6),
  singular2ndPerson: Word('сплавляешься', 6),
  singular3rdPerson: Word('сплавляется', 6),
  plural1stPerson: Word('сплавляемся', 6),
  plural2ndPerson: Word('сплавляетесь', 6),
  plural3rdPerson: Word('сплавляются', 6),
  masculinePast: Word('сплавлялся', 6),
  femininePast: Word('сплавлялась', 6),
  neuterPast: Word('сплавлялось', 6),
  pluralPast: Word('сплавлялись', 6),
  imperativeInformal: Word('сплавляйся', 6),
  imperativeFormal: Word('сплавляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(сплавляться.name.text, сплавляться);

export { сплавляться };