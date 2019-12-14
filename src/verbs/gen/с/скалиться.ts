import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скалиться: PerfectVerb = {
  name: Word('скалиться', 2),
  singular1stPerson: Word('скалюсь', 2),
  singular2ndPerson: Word('скалишься', 2),
  singular3rdPerson: Word('скалится', 2),
  plural1stPerson: Word('скалимся', 2),
  plural2ndPerson: Word('скалитесь', 2),
  plural3rdPerson: Word('скалятся', 2),
  masculinePast: Word('скалился', 2),
  femininePast: Word('скалилась', 2),
  neuterPast: Word('скалилось', 2),
  pluralPast: Word('скалились', 2),
  imperativeInformal: Word('скалься', 2),
  imperativeFormal: Word('скальтесь', 2),
  imperfect: [],
};

perfectVerbs.set(скалиться.name.text, скалиться);

export { скалиться };