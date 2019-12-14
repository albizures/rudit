import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выиграться: PerfectVerb = {
  name: Word('выиграться', 1),
  singular1stPerson: Word('выиграюсь', 1),
  singular2ndPerson: Word('выиграешься', 1),
  singular3rdPerson: Word('выиграется', 1),
  plural1stPerson: Word('выиграемся', 1),
  plural2ndPerson: Word('выиграетесь', 1),
  plural3rdPerson: Word('выиграются', 1),
  masculinePast: Word('выигрался', 1),
  femininePast: Word('выигралась', 1),
  neuterPast: Word('выигралось', 1),
  pluralPast: Word('выигрались', 1),
  imperativeInformal: Word('выиграйся', 1),
  imperativeFormal: Word('выиграйтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выиграться.name.text, выиграться);

export { выиграться };