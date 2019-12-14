import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрисоваться: PerfectVerb = {
  name: Word('обрисоваться', 7),
  singular1stPerson: Word('обрисуюсь', 5),
  singular2ndPerson: Word('обрисуешься', 5),
  singular3rdPerson: Word('обрисуется', 5),
  plural1stPerson: Word('обрисуемся', 5),
  plural2ndPerson: Word('обрисуетесь', 5),
  plural3rdPerson: Word('обрисуются', 5),
  masculinePast: Word('обрисовался', 7),
  femininePast: Word('обрисовалась', 7),
  neuterPast: Word('обрисовалось', 7),
  pluralPast: Word('обрисовались', 7),
  imperativeInformal: Word('обрисуйся', 5),
  imperativeFormal: Word('обрисуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обрисоваться.name.text, обрисоваться);

export { обрисоваться };