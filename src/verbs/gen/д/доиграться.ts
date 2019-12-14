import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доиграться: PerfectVerb = {
  name: Word('доиграться', 5),
  singular1stPerson: Word('доиграюсь', 5),
  singular2ndPerson: Word('доиграешься', 5),
  singular3rdPerson: Word('доиграется', 5),
  plural1stPerson: Word('доиграемся', 5),
  plural2ndPerson: Word('доиграетесь', 5),
  plural3rdPerson: Word('доиграются', 5),
  masculinePast: Word('доигрался', 5),
  femininePast: Word('доигралась', 5),
  neuterPast: Word('доигралось', 5),
  pluralPast: Word('доигрались', 5),
  imperativeInformal: Word('доиграйся', 5),
  imperativeFormal: Word('доиграйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(доиграться.name.text, доиграться);

export { доиграться };