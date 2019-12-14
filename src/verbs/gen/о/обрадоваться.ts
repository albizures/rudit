import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрадоваться: PerfectVerb = {
  name: Word('обрадоваться', 3),
  singular1stPerson: Word('обрадуюсь', 3),
  singular2ndPerson: Word('обрадуешься', 3),
  singular3rdPerson: Word('обрадуется', 3),
  plural1stPerson: Word('обрадуемся', 3),
  plural2ndPerson: Word('обрадуетесь', 3),
  plural3rdPerson: Word('обрадуются', 3),
  masculinePast: Word('обрадовался', 3),
  femininePast: Word('обрадовалась', 3),
  neuterPast: Word('обрадовалось', 3),
  pluralPast: Word('обрадовались', 3),
  imperativeInformal: Word('обрадуйся', 3),
  imperativeFormal: Word('обрадуйтесь', 3),
  imperfect: ['радоваться'],
};

perfectVerbs.set(обрадоваться.name.text, обрадоваться);

export { обрадоваться };