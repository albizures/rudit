import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const острить: PerfectVerb = {
  name: Word('острить', 4),
  singular1stPerson: Word('острю', 4),
  singular2ndPerson: Word('остришь', 4),
  singular3rdPerson: Word('острит', 4),
  plural1stPerson: Word('острим', 4),
  plural2ndPerson: Word('острите', 4),
  plural3rdPerson: Word('острят', 4),
  masculinePast: Word('острил', 4),
  femininePast: Word('острила', 4),
  neuterPast: Word('острило', 4),
  pluralPast: Word('острили', 4),
  imperativeInformal: Word('остри', 4),
  imperativeFormal: Word('острите', 4),
  imperfect: [],
};

perfectVerbs.set(острить.name.text, острить);

export { острить };