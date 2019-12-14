import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригладить: PerfectVerb = {
  name: Word('пригладить', 5),
  singular1stPerson: Word('приглажу', 5),
  singular2ndPerson: Word('пригладишь', 5),
  singular3rdPerson: Word('пригладит', 5),
  plural1stPerson: Word('пригладим', 5),
  plural2ndPerson: Word('пригладите', 5),
  plural3rdPerson: Word('пригладят', 5),
  masculinePast: Word('пригладил', 5),
  femininePast: Word('пригладила', 5),
  neuterPast: Word('пригладило', 5),
  pluralPast: Word('пригладили', 5),
  imperativeInformal: Word('пригладь', 5),
  imperativeFormal: Word('пригладьте', 5),
  imperfect: [],
};

perfectVerbs.set(пригладить.name.text, пригладить);

export { пригладить };