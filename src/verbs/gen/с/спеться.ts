import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спеться: PerfectVerb = {
  name: Word('спеться', 2),
  singular1stPerson: Word('споюсь', 3),
  singular2ndPerson: Word('споёшься', 3),
  singular3rdPerson: Word('споётся', 3),
  plural1stPerson: Word('споёмся', 3),
  plural2ndPerson: Word('споётесь', 3),
  plural3rdPerson: Word('споются', 3),
  masculinePast: Word('спелся', 2),
  femininePast: Word('спелась', 2),
  neuterPast: Word('спелось', 2),
  pluralPast: Word('спелись', 2),
  imperativeInformal: Word('спойся', 2),
  imperativeFormal: Word('спойтесь', 2),
  imperfect: [],
};

perfectVerbs.set(спеться.name.text, спеться);

export { спеться };