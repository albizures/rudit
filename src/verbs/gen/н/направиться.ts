import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const направиться: PerfectVerb = {
  name: Word('направиться', 4),
  singular1stPerson: Word('направлюсь', 4),
  singular2ndPerson: Word('направишься', 4),
  singular3rdPerson: Word('направится', 4),
  plural1stPerson: Word('направимся', 4),
  plural2ndPerson: Word('направитесь', 4),
  plural3rdPerson: Word('направятся', 4),
  masculinePast: Word('направился', 4),
  femininePast: Word('направилась', 4),
  neuterPast: Word('направилось', 4),
  pluralPast: Word('направились', 4),
  imperativeInformal: Word('направься', 4),
  imperativeFormal: Word('направьтесь', 4),
  imperfect: ['направляться'],
};

perfectVerbs.set(направиться.name.text, направиться);

export { направиться };