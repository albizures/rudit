import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кооперироваться: PerfectVerb = {
  name: Word('кооперироваться', 6),
  singular1stPerson: Word('кооперируюсь', 6),
  singular2ndPerson: Word('кооперируешься', 6),
  singular3rdPerson: Word('кооперируется', 6),
  plural1stPerson: Word('кооперируемся', 6),
  plural2ndPerson: Word('кооперируетесь', 6),
  plural3rdPerson: Word('кооперируются', 6),
  masculinePast: Word('кооперировался', 6),
  femininePast: Word('кооперировалась', 6),
  neuterPast: Word('кооперировалось', 6),
  pluralPast: Word('кооперировались', 6),
  imperativeInformal: Word('кооперируйся', 6),
  imperativeFormal: Word('кооперируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(кооперироваться.name.text, кооперироваться);

export { кооперироваться };