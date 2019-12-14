import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпарить: PerfectVerb = {
  name: Word('отпарить', 3),
  singular1stPerson: Word('отпарю', 3),
  singular2ndPerson: Word('отпаришь', 3),
  singular3rdPerson: Word('отпарит', 3),
  plural1stPerson: Word('отпарим', 3),
  plural2ndPerson: Word('отпарите', 3),
  plural3rdPerson: Word('отпарят', 3),
  masculinePast: Word('отпарил', 3),
  femininePast: Word('отпарила', 3),
  neuterPast: Word('отпарило', 3),
  pluralPast: Word('отпарили', 3),
  imperativeInformal: Word('отпарь', 3),
  imperativeFormal: Word('отпарьте', 3),
  imperfect: [],
};

perfectVerbs.set(отпарить.name.text, отпарить);

export { отпарить };