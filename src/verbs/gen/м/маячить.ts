import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маячить: PerfectVerb = {
  name: Word('маячить', 2),
  singular1stPerson: Word('маячу', 2),
  singular2ndPerson: Word('маячишь', 2),
  singular3rdPerson: Word('маячит', 2),
  plural1stPerson: Word('маячим', 2),
  plural2ndPerson: Word('маячите', 2),
  plural3rdPerson: Word('маячат', 2),
  masculinePast: Word('маячил', 2),
  femininePast: Word('маячила', 2),
  neuterPast: Word('маячило', 2),
  pluralPast: Word('маячили', 2),
  imperativeInformal: Word('маячь', 2),
  imperativeFormal: Word('маячьте', 2),
  imperfect: [],
};

perfectVerbs.set(маячить.name.text, маячить);

export { маячить };