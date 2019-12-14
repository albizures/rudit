import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преобразоваться: PerfectVerb = {
  name: Word('преобразоваться', 10),
  singular1stPerson: Word('преобразуюсь', 6),
  singular2ndPerson: Word('преобразуешься', 6),
  singular3rdPerson: Word('преобразуется', 6),
  plural1stPerson: Word('преобразуемся', 6),
  plural2ndPerson: Word('преобразуетесь', 6),
  plural3rdPerson: Word('преобразуются', 6),
  masculinePast: Word('преобразовался', 10),
  femininePast: Word('преобразовалась', 10),
  neuterPast: Word('преобразовалось', 10),
  pluralPast: Word('преобразовались', 10),
  imperativeInformal: Word('преобразуйся', 6),
  imperativeFormal: Word('преобразуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(преобразоваться.name.text, преобразоваться);

export { преобразоваться };