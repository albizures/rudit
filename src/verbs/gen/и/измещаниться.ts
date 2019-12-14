import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измещаниться: PerfectVerb = {
  name: Word('измещаниться', 5),
  singular1stPerson: Word('измещанюсь', 5),
  singular2ndPerson: Word('измещанишься', 5),
  singular3rdPerson: Word('измещанится', 5),
  plural1stPerson: Word('измещанимся', 5),
  plural2ndPerson: Word('измещанитесь', 5),
  plural3rdPerson: Word('измещанятся', 5),
  masculinePast: Word('измещанился', 5),
  femininePast: Word('измещанилась', 5),
  neuterPast: Word('измещанилось', 5),
  pluralPast: Word('измещанились', 5),
  imperativeInformal: Word('измещанься', 5),
  imperativeFormal: Word('измещаньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(измещаниться.name.text, измещаниться);

export { измещаниться };