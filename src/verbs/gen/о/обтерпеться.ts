import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтерпеться: PerfectVerb = {
  name: Word('обтерпеться', 6),
  singular1stPerson: Word('обтерплюсь', 7),
  singular2ndPerson: Word('обтерпишься', 3),
  singular3rdPerson: Word('обтерпится', 3),
  plural1stPerson: Word('обтерпимся', 3),
  plural2ndPerson: Word('обтерпитесь', 3),
  plural3rdPerson: Word('обтерпятся', 3),
  masculinePast: Word('обтерпелся', 6),
  femininePast: Word('обтерпелась', 6),
  neuterPast: Word('обтерпелось', 6),
  pluralPast: Word('обтерпелись', 6),
  imperativeInformal: Word('обтерпись', 6),
  imperativeFormal: Word('обтерпитесь', 6),
  imperfect: [],
};

perfectVerbs.set(обтерпеться.name.text, обтерпеться);

export { обтерпеться };