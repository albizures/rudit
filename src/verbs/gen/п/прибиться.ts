import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибиться: PerfectVerb = {
  name: Word('прибиться', 4),
  singular1stPerson: Word('прибьюсь', 5),
  singular2ndPerson: Word('прибьёшься', 2),
  singular3rdPerson: Word('прибьётся', 2),
  plural1stPerson: Word('прибьёмся', 2),
  plural2ndPerson: Word('прибьётесь', 7),
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