import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коксоваться: PerfectVerb = {
  name: Word('коксоваться', 6),
  singular1stPerson: Word('коксуюсь', 4),
  singular2ndPerson: Word('коксуешься', 4),
  singular3rdPerson: Word('коксуется', 4),
  plural1stPerson: Word('коксуемся', 4),
  plural2ndPerson: Word('коксуетесь', 4),
  plural3rdPerson: Word('коксуются', 4),
  masculinePast: Word('коксовался', 6),
  femininePast: Word('коксовалась', 6),
  neuterPast: Word('коксовалось', 6),
  pluralPast: Word('коксовались', 6),
  imperativeInformal: Word('коксуйся', 4),
  imperativeFormal: Word('коксуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(коксоваться.name.text, коксоваться);

export { коксоваться };