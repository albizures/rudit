import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скандалиться: PerfectVerb = {
  name: Word('скандалиться', 5),
  singular1stPerson: Word('скандалюсь', 5),
  singular2ndPerson: Word('скандалишься', 5),
  singular3rdPerson: Word('скандалится', 5),
  plural1stPerson: Word('скандалимся', 5),
  plural2ndPerson: Word('скандалитесь', 5),
  plural3rdPerson: Word('скандалятся', 5),
  masculinePast: Word('скандалился', 5),
  femininePast: Word('скандалилась', 5),
  neuterPast: Word('скандалилось', 5),
  pluralPast: Word('скандалились', 5),
  imperativeInformal: Word('скандалься', 5),
  imperativeFormal: Word('скандальтесь', 5),
  imperfect: [],
};

perfectVerbs.set(скандалиться.name.text, скандалиться);

export { скандалиться };