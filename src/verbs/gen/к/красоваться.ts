import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const красоваться: PerfectVerb = {
  name: Word('красоваться', 6),
  singular1stPerson: Word('красуюсь', 4),
  singular2ndPerson: Word('красуешься', 4),
  singular3rdPerson: Word('красуется', 4),
  plural1stPerson: Word('красуемся', 4),
  plural2ndPerson: Word('красуетесь', 4),
  plural3rdPerson: Word('красуются', 4),
  masculinePast: Word('красовался', 6),
  femininePast: Word('красовалась', 6),
  neuterPast: Word('красовалось', 6),
  pluralPast: Word('красовались', 6),
  imperativeInformal: Word('красуйся', 4),
  imperativeFormal: Word('красуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(красоваться.name.text, красоваться);

export { красоваться };