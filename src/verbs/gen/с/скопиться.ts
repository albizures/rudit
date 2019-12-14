import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скопиться: PerfectVerb = {
  name: Word('скопиться', 4),
  singular1stPerson: Word('скоплюсь', 5),
  singular2ndPerson: Word('скопишься', 2),
  singular3rdPerson: Word('скопится', 2),
  plural1stPerson: Word('скопимся', 2),
  plural2ndPerson: Word('скопитесь', 2),
  plural3rdPerson: Word('скопятся', 2),
  masculinePast: Word('скопился', 4),
  femininePast: Word('скопилась', 4),
  neuterPast: Word('скопилось', 4),
  pluralPast: Word('скопились', 4),
  imperativeInformal: Word('скопись', 4),
  imperativeFormal: Word('скопитесь', 4),
  imperfect: [],
};

perfectVerbs.set(скопиться.name.text, скопиться);

export { скопиться };