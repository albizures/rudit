import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const специализироваться: PerfectVerb = {
  name: Word('специализироваться', 9),
  singular1stPerson: Word('специализируюсь', 9),
  singular2ndPerson: Word('специализируешься', 9),
  singular3rdPerson: Word('специализируется', 9),
  plural1stPerson: Word('специализируемся', 9),
  plural2ndPerson: Word('специализируетесь', 9),
  plural3rdPerson: Word('специализируются', 9),
  masculinePast: Word('специализировался', 9),
  femininePast: Word('специализировалась', 9),
  neuterPast: Word('специализировалось', 9),
  pluralPast: Word('специализировались', 9),
  imperativeInformal: Word('специализируйся', 9),
  imperativeFormal: Word('специализируйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(специализироваться.name.text, специализироваться);

export { специализироваться };