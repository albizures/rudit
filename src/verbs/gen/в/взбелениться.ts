import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбелениться: PerfectVerb = {
  name: Word('взбелениться', 7),
  singular1stPerson: Word('взбеленюсь', 7),
  singular2ndPerson: Word('взбеленишься', 7),
  singular3rdPerson: Word('взбеленится', 7),
  plural1stPerson: Word('взбеленимся', 7),
  plural2ndPerson: Word('взбеленитесь', 7),
  plural3rdPerson: Word('взбеленятся', 7),
  masculinePast: Word('взбеленился', 7),
  femininePast: Word('взбеленилась', 7),
  neuterPast: Word('взбеленилось', 7),
  pluralPast: Word('взбеленились', 7),
  imperativeInformal: Word('взбеленись', 7),
  imperativeFormal: Word('взбеленитесь', 7),
  imperfect: [],
};

perfectVerbs.set(взбелениться.name.text, взбелениться);

export { взбелениться };