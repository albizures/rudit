import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const консультироваться: PerfectVerb = {
  name: Word('консультироваться', 8),
  singular1stPerson: Word('консультируюсь', 8),
  singular2ndPerson: Word('консультируешься', 8),
  singular3rdPerson: Word('консультируется', 8),
  plural1stPerson: Word('консультируемся', 8),
  plural2ndPerson: Word('консультируетесь', 8),
  plural3rdPerson: Word('консультируются', 8),
  masculinePast: Word('консультировался', 8),
  femininePast: Word('консультировалась', 8),
  neuterPast: Word('консультировалось', 8),
  pluralPast: Word('консультировались', 8),
  imperativeInformal: Word('консультируйся', 8),
  imperativeFormal: Word('консультируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(консультироваться.name.text, консультироваться);

export { консультироваться };