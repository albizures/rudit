import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омещаниться: PerfectVerb = {
  name: Word('омещаниться', 4),
  singular1stPerson: Word('омещанюсь', 4),
  singular2ndPerson: Word('омещанишься', 4),
  singular3rdPerson: Word('омещанится', 4),
  plural1stPerson: Word('омещанимся', 4),
  plural2ndPerson: Word('омещанитесь', 4),
  plural3rdPerson: Word('омещанятся', 4),
  masculinePast: Word('омещанился', 4),
  femininePast: Word('омещанилась', 4),
  neuterPast: Word('омещанилось', 4),
  pluralPast: Word('омещанились', 4),
  imperativeInformal: Word('омещанься', 4),
  imperativeFormal: Word('омещаньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(омещаниться.name.text, омещаниться);

export { омещаниться };