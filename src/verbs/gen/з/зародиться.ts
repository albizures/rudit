import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зародиться: PerfectVerb = {
  name: Word('зародиться', 5),
  singular1stPerson: Word('зарожусь', 5),
  singular2ndPerson: Word('зародишься', 5),
  singular3rdPerson: Word('зародится', 5),
  plural1stPerson: Word('зародимся', 5),
  plural2ndPerson: Word('зародитесь', 5),
  plural3rdPerson: Word('зародятся', 5),
  masculinePast: Word('зародился', 5),
  femininePast: Word('зародилась', 5),
  neuterPast: Word('зародилось', 5),
  pluralPast: Word('зародились', 5),
  imperativeInformal: Word('зародись', 5),
  imperativeFormal: Word('зародитесь', 5),
  imperfect: [],
};

perfectVerbs.set(зародиться.name.text, зародиться);

export { зародиться };