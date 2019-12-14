import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припомнить: PerfectVerb = {
  name: Word('припомнить', 4),
  singular1stPerson: Word('припомню', 4),
  singular2ndPerson: Word('припомнишь', 4),
  singular3rdPerson: Word('припомнит', 4),
  plural1stPerson: Word('припомним', 4),
  plural2ndPerson: Word('припомните', 4),
  plural3rdPerson: Word('припомнят', 4),
  masculinePast: Word('припомнил', 4),
  femininePast: Word('припомнила', 4),
  neuterPast: Word('припомнило', 4),
  pluralPast: Word('припомнили', 4),
  imperativeInformal: Word('припомни', 4),
  imperativeFormal: Word('припомните', 4),
  imperfect: [],
};

perfectVerbs.set(припомнить.name.text, припомнить);

export { припомнить };