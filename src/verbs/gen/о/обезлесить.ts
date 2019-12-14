import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезлесить: PerfectVerb = {
  name: Word('обезлесить', 5),
  singular1stPerson: Word('обезлешу', 5),
  singular2ndPerson: Word('обезлесишь', 5),
  singular3rdPerson: Word('обезлесит', 5),
  plural1stPerson: Word('обезлесим', 5),
  plural2ndPerson: Word('обезлесите', 5),
  plural3rdPerson: Word('обезлесят', 5),
  masculinePast: Word('обезлесил', 5),
  femininePast: Word('обезлесила', 5),
  neuterPast: Word('обезлесило', 5),
  pluralPast: Word('обезлесили', 5),
  imperativeInformal: Word('обезлесь', 5),
  imperativeFormal: Word('обезлесьте', 5),
  imperfect: [],
};

perfectVerbs.set(обезлесить.name.text, обезлесить);

export { обезлесить };