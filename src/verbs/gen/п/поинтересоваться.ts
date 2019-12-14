import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поинтересоваться: PerfectVerb = {
  name: Word('поинтересоваться', 11),
  singular1stPerson: Word('поинтересуюсь', 9),
  singular2ndPerson: Word('поинтересуешься', 9),
  singular3rdPerson: Word('поинтересуется', 9),
  plural1stPerson: Word('поинтересуемся', 9),
  plural2ndPerson: Word('поинтересуетесь', 9),
  plural3rdPerson: Word('поинтересуются', 9),
  masculinePast: Word('поинтересовался', 11),
  femininePast: Word('поинтересовалась', 11),
  neuterPast: Word('поинтересовалось', 11),
  pluralPast: Word('поинтересовались', 11),
  imperativeInformal: Word('поинтересуйся', 9),
  imperativeFormal: Word('поинтересуйтесь', 9),
  imperfect: ['интересоваться'],
};

perfectVerbs.set(поинтересоваться.name.text, поинтересоваться);

export { поинтересоваться };