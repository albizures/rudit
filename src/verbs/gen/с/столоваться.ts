import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const столоваться: PerfectVerb = {
  name: Word('столоваться', 6),
  singular1stPerson: Word('столуюсь', 4),
  singular2ndPerson: Word('столуешься', 4),
  singular3rdPerson: Word('столуется', 4),
  plural1stPerson: Word('столуемся', 4),
  plural2ndPerson: Word('столуетесь', 4),
  plural3rdPerson: Word('столуются', 4),
  masculinePast: Word('столовался', 6),
  femininePast: Word('столовалась', 6),
  neuterPast: Word('столовалось', 6),
  pluralPast: Word('столовались', 6),
  imperativeInformal: Word('столуйся', 4),
  imperativeFormal: Word('столуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(столоваться.name.text, столоваться);

export { столоваться };