import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погладить: PerfectVerb = {
  name: Word('погладить', 4),
  singular1stPerson: Word('поглажу', 4),
  singular2ndPerson: Word('погладишь', 4),
  singular3rdPerson: Word('погладит', 4),
  plural1stPerson: Word('погладим', 4),
  plural2ndPerson: Word('погладите', 4),
  plural3rdPerson: Word('погладят', 4),
  masculinePast: Word('погладил', 4),
  femininePast: Word('погладила', 4),
  neuterPast: Word('погладило', 4),
  pluralPast: Word('погладили', 4),
  imperativeInformal: Word('погладь', 4),
  imperativeFormal: Word('погладьте', 4),
  imperfect: ['гладить'],
};

perfectVerbs.set(погладить.name.text, погладить);

export { погладить };