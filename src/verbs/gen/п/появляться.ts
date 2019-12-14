import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const появляться: PerfectVerb = {
  name: Word('появляться', 5),
  singular1stPerson: Word('появляюсь', 5),
  singular2ndPerson: Word('появляешься', 5),
  singular3rdPerson: Word('появляется', 5),
  plural1stPerson: Word('появляемся', 5),
  plural2ndPerson: Word('появляетесь', 5),
  plural3rdPerson: Word('появляются', 5),
  masculinePast: Word('появлялся', 5),
  femininePast: Word('появлялась', 5),
  neuterPast: Word('появлялось', 5),
  pluralPast: Word('появлялись', 5),
  imperativeInformal: Word('появляйся', 5),
  imperativeFormal: Word('появляйтесь', 5),
  imperfect: ['появиться'],
};

perfectVerbs.set(появляться.name.text, появляться);

export { появляться };