import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кренить: PerfectVerb = {
  name: Word('кренить', 4),
  singular1stPerson: Word('креню', 4),
  singular2ndPerson: Word('кренишь', 4),
  singular3rdPerson: Word('кренит', 4),
  plural1stPerson: Word('креним', 4),
  plural2ndPerson: Word('крените', 4),
  plural3rdPerson: Word('кренят', 4),
  masculinePast: Word('кренил', 4),
  femininePast: Word('кренила', 4),
  neuterPast: Word('кренило', 4),
  pluralPast: Word('кренили', 4),
  imperativeInformal: Word('крени', 4),
  imperativeFormal: Word('крените', 4),
  imperfect: [],
};

perfectVerbs.set(кренить.name.text, кренить);

export { кренить };