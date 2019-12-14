import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const появиться: PerfectVerb = {
  name: Word('появиться', 4),
  singular1stPerson: Word('появлюсь', 5),
  singular2ndPerson: Word('появишься', 2),
  singular3rdPerson: Word('появится', 2),
  plural1stPerson: Word('появимся', 2),
  plural2ndPerson: Word('появитесь', 2),
  plural3rdPerson: Word('появятся', 2),
  masculinePast: Word('появился', 4),
  femininePast: Word('появилась', 4),
  neuterPast: Word('появилось', 4),
  pluralPast: Word('появились', 4),
  imperativeInformal: Word('появись', 4),
  imperativeFormal: Word('появитесь', 4),
  imperfect: ['появляться'],
};

perfectVerbs.set(появиться.name.text, появиться);

export { появиться };