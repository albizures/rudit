import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скорчиться: PerfectVerb = {
  name: Word('скорчиться', 2),
  singular1stPerson: Word('скорчусь', 2),
  singular2ndPerson: Word('скорчишься', 2),
  singular3rdPerson: Word('скорчится', 2),
  plural1stPerson: Word('скорчимся', 2),
  plural2ndPerson: Word('скорчитесь', 2),
  plural3rdPerson: Word('скорчатся', 2),
  masculinePast: Word('скорчился', 2),
  femininePast: Word('скорчилась', 2),
  neuterPast: Word('скорчилось', 2),
  pluralPast: Word('скорчились', 2),
  imperativeInformal: Word('скорчись//ско'рчься', 2),
  imperativeFormal: Word('скорчитесь//ско'рчьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(скорчиться.name.text, скорчиться);

export { скорчиться };