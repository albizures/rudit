import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сообразоваться: PerfectVerb = {
  name: Word('сообразоваться', 9),
  singular1stPerson: Word('сообразуюсь', 5),
  singular2ndPerson: Word('сообразуешься', 5),
  singular3rdPerson: Word('сообразуется', 5),
  plural1stPerson: Word('сообразуемся', 5),
  plural2ndPerson: Word('сообразуетесь', 5),
  plural3rdPerson: Word('сообразуются', 5),
  masculinePast: Word('сообразовался', 9),
  femininePast: Word('сообразовалась', 9),
  neuterPast: Word('сообразовалось', 9),
  pluralPast: Word('сообразовались', 9),
  imperativeInformal: Word('сообразуйся', 5),
  imperativeFormal: Word('сообразуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сообразоваться.name.text, сообразоваться);

export { сообразоваться };