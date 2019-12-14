import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налюбоваться: PerfectVerb = {
  name: Word('налюбоваться', 7),
  singular1stPerson: Word('налюбуюсь', 5),
  singular2ndPerson: Word('налюбуешься', 5),
  singular3rdPerson: Word('налюбуется', 5),
  plural1stPerson: Word('налюбуемся', 5),
  plural2ndPerson: Word('налюбуетесь', 5),
  plural3rdPerson: Word('налюбуются', 5),
  masculinePast: Word('налюбовался', 7),
  femininePast: Word('налюбовалась', 7),
  neuterPast: Word('налюбовалось', 7),
  pluralPast: Word('налюбовались', 7),
  imperativeInformal: Word('налюбуйся', 5),
  imperativeFormal: Word('налюбуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(налюбоваться.name.text, налюбоваться);

export { налюбоваться };