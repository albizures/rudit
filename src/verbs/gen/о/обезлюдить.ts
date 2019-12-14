import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезлюдить: PerfectVerb = {
  name: Word('обезлюдить', 7),
  singular1stPerson: Word('обезлюжу', 5),
  singular2ndPerson: Word('обезлюдишь', 5),
  singular3rdPerson: Word('обезлюдит', 5),
  plural1stPerson: Word('обезлюдим', 5),
  plural2ndPerson: Word('обезлюдите', 5),
  plural3rdPerson: Word('обезлюдят', 5),
  masculinePast: Word('обезлюдил', 7),
  femininePast: Word('обезлюдила', 7),
  neuterPast: Word('обезлюдило', 7),
  pluralPast: Word('обезлюдили', 7),
  imperativeInformal: Word('обезлюдь', 5),
  imperativeFormal: Word('обезлюдьте', 5),
  imperfect: [],
};

perfectVerbs.set(обезлюдить.name.text, обезлюдить);

export { обезлюдить };