import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объездить: PerfectVerb = {
  name: Word('объездить', 3),
  singular1stPerson: Word('объезжу', 3),
  singular2ndPerson: Word('объездишь', 3),
  singular3rdPerson: Word('объездит', 3),
  plural1stPerson: Word('объездим', 3),
  plural2ndPerson: Word('объездите', 3),
  plural3rdPerson: Word('объездят', 3),
  masculinePast: Word('объездил', 3),
  femininePast: Word('объездила', 3),
  neuterPast: Word('объездило', 3),
  pluralPast: Word('объездили', 3),
  imperativeInformal: Word('объезди', 3),
  imperativeFormal: Word('объездите', 3),
  imperfect: ['объезжать'],
};

perfectVerbs.set(объездить.name.text, объездить);

export { объездить };