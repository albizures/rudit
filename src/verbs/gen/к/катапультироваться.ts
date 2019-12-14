import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const катапультироваться: PerfectVerb = {
  name: Word('катапультироваться', 9),
  singular1stPerson: Word('катапультируюсь', 9),
  singular2ndPerson: Word('катапультируешься', 9),
  singular3rdPerson: Word('катапультируется', 9),
  plural1stPerson: Word('катапультируемся', 9),
  plural2ndPerson: Word('катапультируетесь', 9),
  plural3rdPerson: Word('катапультируются', 9),
  masculinePast: Word('катапультировался', 9),
  femininePast: Word('катапультировалась', 9),
  neuterPast: Word('катапультировалось', 9),
  pluralPast: Word('катапультировались', 9),
  imperativeInformal: Word('катапультируйся', 9),
  imperativeFormal: Word('катапультируйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(катапультироваться.name.text, катапультироваться);

export { катапультироваться };