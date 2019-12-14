import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соскочить: PerfectVerb = {
  name: Word('соскочить', 6),
  singular1stPerson: Word('соскочу', 6),
  singular2ndPerson: Word('соскочишь', 4),
  singular3rdPerson: Word('соскочит', 4),
  plural1stPerson: Word('соскочим', 4),
  plural2ndPerson: Word('соскочите', 4),
  plural3rdPerson: Word('соскочат', 4),
  masculinePast: Word('соскочил', 6),
  femininePast: Word('соскочила', 6),
  neuterPast: Word('соскочило', 6),
  pluralPast: Word('соскочили', 6),
  imperativeInformal: Word('соскочи', 6),
  imperativeFormal: Word('соскочите', 6),
  imperfect: [],
};

perfectVerbs.set(соскочить.name.text, соскочить);

export { соскочить };