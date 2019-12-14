import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const литься: PerfectVerb = {
  name: Word('литься', 1),
  singular1stPerson: Word('льюсь', 2),
  singular2ndPerson: Word('льёшься', 2),
  singular3rdPerson: Word('льётся', 2),
  plural1stPerson: Word('льёмся', 2),
  plural2ndPerson: Word('льётесь', 2),
  plural3rdPerson: Word('льются', 2),
  masculinePast: Word('лился', 1),
  femininePast: Word('лилась', 3),
  neuterPast: Word('лилось', 1),
  pluralPast: Word('лились', 1),
  imperativeInformal: Word('лейся', 1),
  imperativeFormal: Word('лейтесь', 1),
  imperfect: ['политься','вылиться'],
};

perfectVerbs.set(литься.name.text, литься);

export { литься };