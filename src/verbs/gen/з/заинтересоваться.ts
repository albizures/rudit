import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заинтересоваться: PerfectVerb = {
  name: Word('заинтересоваться', 11),
  singular1stPerson: Word('заинтересуюсь', 9),
  singular2ndPerson: Word('заинтересуешься', 9),
  singular3rdPerson: Word('заинтересуется', 9),
  plural1stPerson: Word('заинтересуемся', 9),
  plural2ndPerson: Word('заинтересуетесь', 9),
  plural3rdPerson: Word('заинтересуются', 9),
  masculinePast: Word('заинтересовался', 11),
  femininePast: Word('заинтересовалась', 11),
  neuterPast: Word('заинтересовалось', 11),
  pluralPast: Word('заинтересовались', 11),
  imperativeInformal: Word('заинтересуйся', 9),
  imperativeFormal: Word('заинтересуйтесь', 9),
  imperfect: ['интересоваться'],
};

perfectVerbs.set(заинтересоваться.name.text, заинтересоваться);

export { заинтересоваться };