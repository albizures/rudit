import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копнить: PerfectVerb = {
  name: Word('копнить', 4),
  singular1stPerson: Word('копню', 4),
  singular2ndPerson: Word('копнишь', 4),
  singular3rdPerson: Word('копнит', 4),
  plural1stPerson: Word('копним', 4),
  plural2ndPerson: Word('копните', 4),
  plural3rdPerson: Word('копнят', 4),
  masculinePast: Word('копнил', 4),
  femininePast: Word('копнила', 4),
  neuterPast: Word('копнило', 4),
  pluralPast: Word('копнили', 4),
  imperativeInformal: Word('копни', 4),
  imperativeFormal: Word('копните', 4),
  imperfect: [],
};

perfectVerbs.set(копнить.name.text, копнить);

export { копнить };