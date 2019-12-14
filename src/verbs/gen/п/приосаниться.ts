import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приосаниться: PerfectVerb = {
  name: Word('приосаниться', 5),
  singular1stPerson: Word('приосанюсь', 5),
  singular2ndPerson: Word('приосанишься', 5),
  singular3rdPerson: Word('приосанится', 5),
  plural1stPerson: Word('приосанимся', 5),
  plural2ndPerson: Word('приосанитесь', 5),
  plural3rdPerson: Word('приосанятся', 5),
  masculinePast: Word('приосанился', 5),
  femininePast: Word('приосанилась', 5),
  neuterPast: Word('приосанилось', 5),
  pluralPast: Word('приосанились', 5),
  imperativeInformal: Word('приосанься', 5),
  imperativeFormal: Word('приосаньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(приосаниться.name.text, приосаниться);

export { приосаниться };