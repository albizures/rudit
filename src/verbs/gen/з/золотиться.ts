import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const золотиться: PerfectVerb = {
  name: Word('золотиться', 5),
  singular1stPerson: Word('золочусь', 5),
  singular2ndPerson: Word('золотишься', 5),
  singular3rdPerson: Word('золотится', 5),
  plural1stPerson: Word('золотимся', 5),
  plural2ndPerson: Word('золотитесь', 5),
  plural3rdPerson: Word('золотятся', 5),
  masculinePast: Word('золотился', 5),
  femininePast: Word('золотилась', 5),
  neuterPast: Word('золотилось', 5),
  pluralPast: Word('золотились', 5),
  imperativeInformal: Word('золотись', 5),
  imperativeFormal: Word('золотитесь', 5),
  imperfect: [],
};

perfectVerbs.set(золотиться.name.text, золотиться);

export { золотиться };