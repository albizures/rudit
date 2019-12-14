import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наладить: PerfectVerb = {
  name: Word('наладить', 3),
  singular1stPerson: Word('налажу', 3),
  singular2ndPerson: Word('наладишь', 3),
  singular3rdPerson: Word('наладит', 3),
  plural1stPerson: Word('наладим', 3),
  plural2ndPerson: Word('наладите', 3),
  plural3rdPerson: Word('наладят', 3),
  masculinePast: Word('наладил', 3),
  femininePast: Word('наладила', 3),
  neuterPast: Word('наладило', 3),
  pluralPast: Word('наладили', 3),
  imperativeInformal: Word('наладь', 3),
  imperativeFormal: Word('наладьте', 3),
  imperfect: [],
};

perfectVerbs.set(наладить.name.text, наладить);

export { наладить };