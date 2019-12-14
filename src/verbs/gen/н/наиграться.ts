import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наиграться: PerfectVerb = {
  name: Word('наиграться', 5),
  singular1stPerson: Word('наиграюсь', 5),
  singular2ndPerson: Word('наиграешься', 5),
  singular3rdPerson: Word('наиграется', 5),
  plural1stPerson: Word('наиграемся', 5),
  plural2ndPerson: Word('наиграетесь', 5),
  plural3rdPerson: Word('наиграются', 5),
  masculinePast: Word('наигрался', 5),
  femininePast: Word('наигралась', 5),
  neuterPast: Word('наигралось', 5),
  pluralPast: Word('наигрались', 5),
  imperativeInformal: Word('наиграйся', 5),
  imperativeFormal: Word('наиграйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(наиграться.name.text, наиграться);

export { наиграться };