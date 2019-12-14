import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const организоваться: PerfectVerb = {
  name: Word('организоваться', 9),
  singular1stPerson: Word('организуюсь', 7),
  singular2ndPerson: Word('организуешься', 7),
  singular3rdPerson: Word('организуется', 7),
  plural1stPerson: Word('организуемся', 7),
  plural2ndPerson: Word('организуетесь', 7),
  plural3rdPerson: Word('организуются', 7),
  masculinePast: Word('организовался', 9),
  femininePast: Word('организовалась', 9),
  neuterPast: Word('организовалось', 9),
  pluralPast: Word('организовались', 9),
  imperativeInformal: Word('организуйся', 7),
  imperativeFormal: Word('организуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(организоваться.name.text, организоваться);

export { организоваться };