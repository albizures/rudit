import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отскочить: PerfectVerb = {
  name: Word('отскочить', 6),
  singular1stPerson: Word('отскочу', 6),
  singular2ndPerson: Word('отскочишь', 4),
  singular3rdPerson: Word('отскочит', 4),
  plural1stPerson: Word('отскочим', 4),
  plural2ndPerson: Word('отскочите', 4),
  plural3rdPerson: Word('отскочат', 4),
  masculinePast: Word('отскочил', 6),
  femininePast: Word('отскочила', 6),
  neuterPast: Word('отскочило', 6),
  pluralPast: Word('отскочили', 6),
  imperativeInformal: Word('отскочи', 6),
  imperativeFormal: Word('отскочите', 6),
  imperfect: [],
};

perfectVerbs.set(отскочить.name.text, отскочить);

export { отскочить };