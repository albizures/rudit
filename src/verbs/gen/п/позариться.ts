import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позариться: PerfectVerb = {
  name: Word('позариться', 3),
  singular1stPerson: Word('позарюсь', 3),
  singular2ndPerson: Word('позаришься', 3),
  singular3rdPerson: Word('позарится', 3),
  plural1stPerson: Word('позаримся', 3),
  plural2ndPerson: Word('позаритесь', 3),
  plural3rdPerson: Word('позарятся', 3),
  masculinePast: Word('позарился', 3),
  femininePast: Word('позарилась', 3),
  neuterPast: Word('позарилось', 3),
  pluralPast: Word('позарились', 3),
  imperativeInformal: Word('позарься', 3),
  imperativeFormal: Word('позарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(позариться.name.text, позариться);

export { позариться };