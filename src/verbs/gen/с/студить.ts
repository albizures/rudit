import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const студить: PerfectVerb = {
  name: Word('студить', 4),
  singular1stPerson: Word('стужу', 4),
  singular2ndPerson: Word('студишь', 2),
  singular3rdPerson: Word('студит', 2),
  plural1stPerson: Word('студим', 2),
  plural2ndPerson: Word('студите', 2),
  plural3rdPerson: Word('студят', 2),
  masculinePast: Word('студил', 4),
  femininePast: Word('студила', 4),
  neuterPast: Word('студило', 4),
  pluralPast: Word('студили', 4),
  imperativeInformal: Word('студи', 4),
  imperativeFormal: Word('студите', 4),
  imperfect: [],
};

perfectVerbs.set(студить.name.text, студить);

export { студить };