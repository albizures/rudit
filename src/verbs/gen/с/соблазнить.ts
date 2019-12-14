import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соблазнить: PerfectVerb = {
  name: Word('соблазнить', 7),
  singular1stPerson: Word('соблазню', 7),
  singular2ndPerson: Word('соблазнишь', 7),
  singular3rdPerson: Word('соблазнит', 7),
  plural1stPerson: Word('соблазним', 7),
  plural2ndPerson: Word('соблазните', 7),
  plural3rdPerson: Word('соблазнят', 7),
  masculinePast: Word('соблазнил', 7),
  femininePast: Word('соблазнила', 7),
  neuterPast: Word('соблазнило', 7),
  pluralPast: Word('соблазнили', 7),
  imperativeInformal: Word('соблазни', 7),
  imperativeFormal: Word('соблазните', 7),
  imperfect: ['соблазнять'],
};

perfectVerbs.set(соблазнить.name.text, соблазнить);

export { соблазнить };