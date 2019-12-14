import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожариться: PerfectVerb = {
  name: Word('пожариться', 3),
  singular1stPerson: Word('пожарюсь', 3),
  singular2ndPerson: Word('пожаришься', 3),
  singular3rdPerson: Word('пожарится', 3),
  plural1stPerson: Word('пожаримся', 3),
  plural2ndPerson: Word('пожаритесь', 3),
  plural3rdPerson: Word('пожарятся', 3),
  masculinePast: Word('пожарился', 3),
  femininePast: Word('пожарилась', 3),
  neuterPast: Word('пожарилось', 3),
  pluralPast: Word('пожарились', 3),
  imperativeInformal: Word('пожарься', 3),
  imperativeFormal: Word('пожарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(пожариться.name.text, пожариться);

export { пожариться };