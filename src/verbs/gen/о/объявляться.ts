import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объявляться: PerfectVerb = {
  name: Word('объявляться', 6),
  singular1stPerson: Word('объявляюсь', 6),
  singular2ndPerson: Word('объявляешься', 6),
  singular3rdPerson: Word('объявляется', 6),
  plural1stPerson: Word('объявляемся', 6),
  plural2ndPerson: Word('объявляетесь', 6),
  plural3rdPerson: Word('объявляются', 6),
  masculinePast: Word('объявлялся', 6),
  femininePast: Word('объявлялась', 6),
  neuterPast: Word('объявлялось', 6),
  pluralPast: Word('объявлялись', 6),
  imperativeInformal: Word('объявляйся', 6),
  imperativeFormal: Word('объявляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(объявляться.name.text, объявляться);

export { объявляться };