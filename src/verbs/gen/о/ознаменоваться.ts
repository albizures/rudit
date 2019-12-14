import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ознаменоваться: PerfectVerb = {
  name: Word('ознаменоваться', 9),
  singular1stPerson: Word('ознаменуюсь', 7),
  singular2ndPerson: Word('ознаменуешься', 7),
  singular3rdPerson: Word('ознаменуется', 7),
  plural1stPerson: Word('ознаменуемся', 7),
  plural2ndPerson: Word('ознаменуетесь', 7),
  plural3rdPerson: Word('ознаменуются', 7),
  masculinePast: Word('ознаменовался', 9),
  femininePast: Word('ознаменовалась', 9),
  neuterPast: Word('ознаменовалось', 9),
  pluralPast: Word('ознаменовались', 9),
  imperativeInformal: Word('ознаменуйся', 7),
  imperativeFormal: Word('ознаменуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(ознаменоваться.name.text, ознаменоваться);

export { ознаменоваться };