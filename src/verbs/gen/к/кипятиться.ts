import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кипятиться: PerfectVerb = {
  name: Word('кипятиться', 5),
  singular1stPerson: Word('кипячусь', 5),
  singular2ndPerson: Word('кипятишься', 5),
  singular3rdPerson: Word('кипятится', 5),
  plural1stPerson: Word('кипятимся', 5),
  plural2ndPerson: Word('кипятитесь', 5),
  plural3rdPerson: Word('кипятятся', 5),
  masculinePast: Word('кипятился', 5),
  femininePast: Word('кипятилась', 5),
  neuterPast: Word('кипятилось', 5),
  pluralPast: Word('кипятились', 5),
  imperativeInformal: Word('кипятись', 5),
  imperativeFormal: Word('кипятитесь', 5),
  imperfect: [],
};

perfectVerbs.set(кипятиться.name.text, кипятиться);

export { кипятиться };