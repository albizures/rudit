import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стерпеться: PerfectVerb = {
  name: Word('стерпеться', 5),
  singular1stPerson: Word('стерплюсь', 6),
  singular2ndPerson: Word('стерпишься', 2),
  singular3rdPerson: Word('стерпится', 2),
  plural1stPerson: Word('стерпимся', 2),
  plural2ndPerson: Word('стерпитесь', 2),
  plural3rdPerson: Word('стерпятся', 2),
  masculinePast: Word('стерпелся', 5),
  femininePast: Word('стерпелась', 5),
  neuterPast: Word('стерпелось', 5),
  pluralPast: Word('стерпелись', 5),
  imperativeInformal: Word('стерпись', 5),
  imperativeFormal: Word('стерпитесь', 5),
  imperfect: [],
};

perfectVerbs.set(стерпеться.name.text, стерпеться);

export { стерпеться };