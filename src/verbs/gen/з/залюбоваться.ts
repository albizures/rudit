import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залюбоваться: PerfectVerb = {
  name: Word('залюбоваться', 7),
  singular1stPerson: Word('залюбуюсь', 5),
  singular2ndPerson: Word('залюбуешься', 5),
  singular3rdPerson: Word('залюбуется', 5),
  plural1stPerson: Word('залюбуемся', 5),
  plural2ndPerson: Word('залюбуетесь', 5),
  plural3rdPerson: Word('залюбуются', 5),
  masculinePast: Word('залюбовался', 7),
  femininePast: Word('залюбовалась', 7),
  neuterPast: Word('залюбовалось', 7),
  pluralPast: Word('залюбовались', 7),
  imperativeInformal: Word('залюбуйся', 5),
  imperativeFormal: Word('залюбуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(залюбоваться.name.text, залюбоваться);

export { залюбоваться };