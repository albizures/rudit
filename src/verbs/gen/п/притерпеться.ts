import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притерпеться: PerfectVerb = {
  name: Word('притерпеться', 7),
  singular1stPerson: Word('притерплюсь', 8),
  singular2ndPerson: Word('притерпишься', 4),
  singular3rdPerson: Word('притерпится', 4),
  plural1stPerson: Word('притерпимся', 4),
  plural2ndPerson: Word('притерпитесь', 4),
  plural3rdPerson: Word('притерпятся', 4),
  masculinePast: Word('притерпелся', 7),
  femininePast: Word('притерпелась', 7),
  neuterPast: Word('притерпелось', 7),
  pluralPast: Word('притерпелись', 7),
  imperativeInformal: Word('притерпись', 7),
  imperativeFormal: Word('притерпитесь', 7),
  imperfect: [],
};

perfectVerbs.set(притерпеться.name.text, притерпеться);

export { притерпеться };