import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натерпеться: PerfectVerb = {
  name: Word('натерпеться', 6),
  singular1stPerson: Word('натерплюсь', 7),
  singular2ndPerson: Word('натерпишься', 3),
  singular3rdPerson: Word('натерпится', 3),
  plural1stPerson: Word('натерпимся', 3),
  plural2ndPerson: Word('натерпитесь', 3),
  plural3rdPerson: Word('натерпятся', 3),
  masculinePast: Word('натерпелся', 6),
  femininePast: Word('натерпелась', 6),
  neuterPast: Word('натерпелось', 6),
  pluralPast: Word('натерпелись', 6),
  imperativeInformal: Word('натерпись', 6),
  imperativeFormal: Word('натерпитесь', 6),
  imperfect: [],
};

perfectVerbs.set(натерпеться.name.text, натерпеться);

export { натерпеться };