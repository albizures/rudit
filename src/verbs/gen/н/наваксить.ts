import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наваксить: PerfectVerb = {
  name: Word('наваксить', 3),
  singular1stPerson: Word('навакшу', 3),
  singular2ndPerson: Word('наваксишь', 3),
  singular3rdPerson: Word('наваксит', 3),
  plural1stPerson: Word('наваксим', 3),
  plural2ndPerson: Word('наваксите', 3),
  plural3rdPerson: Word('наваксят', 3),
  masculinePast: Word('наваксил', 3),
  femininePast: Word('наваксила', 3),
  neuterPast: Word('наваксило', 3),
  pluralPast: Word('наваксили', 3),
  imperativeInformal: Word('навакси', 3),
  imperativeFormal: Word('наваксите', 3),
  imperfect: [],
};

perfectVerbs.set(наваксить.name.text, наваксить);

export { наваксить };