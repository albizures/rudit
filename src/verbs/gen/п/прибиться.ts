import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибиться: PerfectVerb = {
  name: Word('прибиться', 4),
  singular1stPerson: Word('прибьюсь', 5),
  singular2ndPerson: Word('прибьёшься', 5),
  singular3rdPerson: Word('прибьётся', 5),
  plural1stPerson: Word('прибьёмся', 5),
  plural2ndPerson: Word('прибьётесь', 5),
  plural3rdPerson: Word('прибьются', 5),
  masculinePast: Word('прибился', 4),
  femininePast: Word('прибилась', 4),
  neuterPast: Word('прибилось', 4),
  pluralPast: Word('прибились', 4),
  imperativeInformal: Word('прибейся', 4),
  imperativeFormal: Word('прибейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прибиться.name.text, прибиться);

export { прибиться };