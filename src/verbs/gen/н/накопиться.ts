import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накопиться: PerfectVerb = {
  name: Word('накопиться', 5),
  singular1stPerson: Word('накоплюсь', 6),
  singular2ndPerson: Word('накопишься', 3),
  singular3rdPerson: Word('накопится', 3),
  plural1stPerson: Word('накопимся', 3),
  plural2ndPerson: Word('накопитесь', 3),
  plural3rdPerson: Word('накопятся', 3),
  masculinePast: Word('накопился', 5),
  femininePast: Word('накопилась', 5),
  neuterPast: Word('накопилось', 5),
  pluralPast: Word('накопились', 5),
  imperativeInformal: Word('накопись', 5),
  imperativeFormal: Word('накопитесь', 5),
  imperfect: [],
};

perfectVerbs.set(накопиться.name.text, накопиться);

export { накопиться };