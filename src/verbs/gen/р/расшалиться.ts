import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшалиться: PerfectVerb = {
  name: Word('расшалиться', 6),
  singular1stPerson: Word('расшалюсь', 6),
  singular2ndPerson: Word('расшалишься', 6),
  singular3rdPerson: Word('расшалится', 6),
  plural1stPerson: Word('расшалимся', 6),
  plural2ndPerson: Word('расшалитесь', 6),
  plural3rdPerson: Word('расшалятся', 6),
  masculinePast: Word('расшалился', 6),
  femininePast: Word('расшалилась', 6),
  neuterPast: Word('расшалилось', 6),
  pluralPast: Word('расшалились', 6),
  imperativeInformal: Word('расшались', 6),
  imperativeFormal: Word('расшалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расшалиться.name.text, расшалиться);

export { расшалиться };