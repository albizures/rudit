import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проторговаться: PerfectVerb = {
  name: Word('проторговаться', 9),
  singular1stPerson: Word('проторгуюсь', 7),
  singular2ndPerson: Word('проторгуешься', 7),
  singular3rdPerson: Word('проторгуется', 7),
  plural1stPerson: Word('проторгуемся', 7),
  plural2ndPerson: Word('проторгуетесь', 7),
  plural3rdPerson: Word('проторгуются', 7),
  masculinePast: Word('проторговался', 9),
  femininePast: Word('проторговалась', 9),
  neuterPast: Word('проторговалось', 9),
  pluralPast: Word('проторговались', 9),
  imperativeInformal: Word('проторгуйся', 7),
  imperativeFormal: Word('проторгуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(проторговаться.name.text, проторговаться);

export { проторговаться };