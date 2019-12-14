import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезлюдеть: PerfectVerb = {
  name: Word('обезлюдеть', 5),
  singular1stPerson: Word('обезлюдею', 5),
  singular2ndPerson: Word('обезлюдеешь', 5),
  singular3rdPerson: Word('обезлюдеет', 5),
  plural1stPerson: Word('обезлюдеем', 5),
  plural2ndPerson: Word('обезлюдеете', 5),
  plural3rdPerson: Word('обезлюдеют', 5),
  masculinePast: Word('обезлюдел', 5),
  femininePast: Word('обезлюдела', 5),
  neuterPast: Word('обезлюдело', 5),
  pluralPast: Word('обезлюдели', 5),
  imperativeInformal: Word('обезлюдей', 5),
  imperativeFormal: Word('обезлюдейте', 5),
  imperfect: [],
};

perfectVerbs.set(обезлюдеть.name.text, обезлюдеть);

export { обезлюдеть };