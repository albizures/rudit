import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const производить: PerfectVerb = {
  name: Word('производить', 8),
  singular1stPerson: Word('произвожу', 8),
  singular2ndPerson: Word('производишь', 6),
  singular3rdPerson: Word('производит', 6),
  plural1stPerson: Word('производим', 6),
  plural2ndPerson: Word('производите', 6),
  plural3rdPerson: Word('производят', 6),
  masculinePast: Word('производил', 8),
  femininePast: Word('производила', 8),
  neuterPast: Word('производило', 8),
  pluralPast: Word('производили', 8),
  imperativeInformal: Word('производи', 8),
  imperativeFormal: Word('производите', 8),
  imperfect: ['произвести'],
};

perfectVerbs.set(производить.name.text, производить);

export { производить };