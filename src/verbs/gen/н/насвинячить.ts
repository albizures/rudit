import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насвинячить: PerfectVerb = {
  name: Word('насвинячить', 6),
  singular1stPerson: Word('насвинячу', 6),
  singular2ndPerson: Word('насвинячишь', 6),
  singular3rdPerson: Word('насвинячит', 6),
  plural1stPerson: Word('насвинячим', 6),
  plural2ndPerson: Word('насвинячите', 6),
  plural3rdPerson: Word('насвинячат', 6),
  masculinePast: Word('насвинячил', 6),
  femininePast: Word('насвинячила', 6),
  neuterPast: Word('насвинячило', 6),
  pluralPast: Word('насвинячили', 6),
  imperativeInformal: Word('насвинячь', 6),
  imperativeFormal: Word('насвинячьте', 6),
  imperfect: [],
};

perfectVerbs.set(насвинячить.name.text, насвинячить);

export { насвинячить };