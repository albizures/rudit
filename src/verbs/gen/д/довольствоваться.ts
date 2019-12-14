import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довольствоваться: PerfectVerb = {
  name: Word('довольствоваться', 3),
  singular1stPerson: Word('довольствуюсь', 3),
  singular2ndPerson: Word('довольствуешься', 3),
  singular3rdPerson: Word('довольствуется', 3),
  plural1stPerson: Word('довольствуемся', 3),
  plural2ndPerson: Word('довольствуетесь', 3),
  plural3rdPerson: Word('довольствуются', 3),
  masculinePast: Word('довольствовался', 3),
  femininePast: Word('довольствовалась', 3),
  neuterPast: Word('довольствовалось', 3),
  pluralPast: Word('довольствовались', 3),
  imperativeInformal: Word('довольствуйся', 3),
  imperativeFormal: Word('довольствуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(довольствоваться.name.text, довольствоваться);

export { довольствоваться };