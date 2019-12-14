import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплющить: PerfectVerb = {
  name: Word('сплющить', 3),
  singular1stPerson: Word('сплющу', 3),
  singular2ndPerson: Word('сплющишь', 3),
  singular3rdPerson: Word('сплющит', 3),
  plural1stPerson: Word('сплющим', 3),
  plural2ndPerson: Word('сплющите', 3),
  plural3rdPerson: Word('сплющат', 3),
  masculinePast: Word('сплющил', 3),
  femininePast: Word('сплющила', 3),
  neuterPast: Word('сплющило', 3),
  pluralPast: Word('сплющили', 3),
  imperativeInformal: Word('сплющи//сплю'щь', 3),
  imperativeFormal: Word('сплющьте', 3),
  imperfect: [],
};

perfectVerbs.set(сплющить.name.text, сплющить);

export { сплющить };