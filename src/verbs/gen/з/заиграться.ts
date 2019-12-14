import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заиграться: PerfectVerb = {
  name: Word('заиграться', 5),
  singular1stPerson: Word('заиграюсь', 5),
  singular2ndPerson: Word('заиграешься', 5),
  singular3rdPerson: Word('заиграется', 5),
  plural1stPerson: Word('заиграемся', 5),
  plural2ndPerson: Word('заиграетесь', 5),
  plural3rdPerson: Word('заиграются', 5),
  masculinePast: Word('заигрался', 5),
  femininePast: Word('заигралась', 5),
  neuterPast: Word('заигралось', 5),
  pluralPast: Word('заигрались', 5),
  imperativeInformal: Word('заиграйся', 5),
  imperativeFormal: Word('заиграйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заиграться.name.text, заиграться);

export { заиграться };