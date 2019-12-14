import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережариться: PerfectVerb = {
  name: Word('пережариться', 5),
  singular1stPerson: Word('пережарюсь', 5),
  singular2ndPerson: Word('пережаришься', 5),
  singular3rdPerson: Word('пережарится', 5),
  plural1stPerson: Word('пережаримся', 5),
  plural2ndPerson: Word('пережаритесь', 5),
  plural3rdPerson: Word('пережарятся', 5),
  masculinePast: Word('пережарился', 5),
  femininePast: Word('пережарилась', 5),
  neuterPast: Word('пережарилось', 5),
  pluralPast: Word('пережарились', 5),
  imperativeInformal: Word('пережарься', 5),
  imperativeFormal: Word('пережарьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(пережариться.name.text, пережариться);

export { пережариться };