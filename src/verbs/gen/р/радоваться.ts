import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const радоваться: PerfectVerb = {
  name: Word('радоваться', 1),
  singular1stPerson: Word('радуюсь', 1),
  singular2ndPerson: Word('радуешься', 1),
  singular3rdPerson: Word('радуется', 1),
  plural1stPerson: Word('радуемся', 1),
  plural2ndPerson: Word('радуетесь', 1),
  plural3rdPerson: Word('радуются', 1),
  masculinePast: Word('радовался', 1),
  femininePast: Word('радовалась', 1),
  neuterPast: Word('радовалось', 1),
  pluralPast: Word('радовались', 1),
  imperativeInformal: Word('радуйся', 1),
  imperativeFormal: Word('радуйтесь', 1),
  imperfect: ['обрадоваться','порадоваться'],
};

perfectVerbs.set(радоваться.name.text, радоваться);

export { радоваться };