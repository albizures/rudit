import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скоромиться: PerfectVerb = {
  name: Word('скоромиться', 4),
  singular1stPerson: Word('скоромлюсь', 4),
  singular2ndPerson: Word('скоромишься', 4),
  singular3rdPerson: Word('скоромится', 4),
  plural1stPerson: Word('скоромимся', 4),
  plural2ndPerson: Word('скоромитесь', 4),
  plural3rdPerson: Word('скоромятся', 4),
  masculinePast: Word('скоромился', 4),
  femininePast: Word('скоромилась', 4),
  neuterPast: Word('скоромилось', 4),
  pluralPast: Word('скоромились', 4),
  imperativeInformal: Word('скоромься', 4),
  imperativeFormal: Word('скоромьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(скоромиться.name.text, скоромиться);

export { скоромиться };