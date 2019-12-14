import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интересоваться: PerfectVerb = {
  name: Word('интересоваться', 9),
  singular1stPerson: Word('интересуюсь', 7),
  singular2ndPerson: Word('интересуешься', 7),
  singular3rdPerson: Word('интересуется', 7),
  plural1stPerson: Word('интересуемся', 7),
  plural2ndPerson: Word('интересуетесь', 7),
  plural3rdPerson: Word('интересуются', 7),
  masculinePast: Word('интересовался', 9),
  femininePast: Word('интересовалась', 9),
  neuterPast: Word('интересовалось', 9),
  pluralPast: Word('интересовались', 9),
  imperativeInformal: Word('интересуйся', 7),
  imperativeFormal: Word('интересуйтесь', 7),
  imperfect: ['заинтересоваться','поинтересоваться'],
};

perfectVerbs.set(интересоваться.name.text, интересоваться);

export { интересоваться };