import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упариться: PerfectVerb = {
  name: Word('упариться', 2),
  singular1stPerson: Word('упарюсь', 2),
  singular2ndPerson: Word('упаришься', 2),
  singular3rdPerson: Word('упарится', 2),
  plural1stPerson: Word('упаримся', 2),
  plural2ndPerson: Word('упаритесь', 2),
  plural3rdPerson: Word('упарятся', 2),
  masculinePast: Word('упарился', 2),
  femininePast: Word('упарилась', 2),
  neuterPast: Word('упарилось', 2),
  pluralPast: Word('упарились', 2),
  imperativeInformal: Word('упарься', 2),
  imperativeFormal: Word('упарьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(упариться.name.text, упариться);

export { упариться };