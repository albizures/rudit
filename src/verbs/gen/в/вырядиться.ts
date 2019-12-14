import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырядиться: PerfectVerb = {
  name: Word('вырядиться', 1),
  singular1stPerson: Word('выряжусь', 1),
  singular2ndPerson: Word('вырядишься', 1),
  singular3rdPerson: Word('вырядится', 1),
  plural1stPerson: Word('вырядимся', 1),
  plural2ndPerson: Word('вырядитесь', 1),
  plural3rdPerson: Word('вырядятся', 1),
  masculinePast: Word('вырядился', 1),
  femininePast: Word('вырядилась', 1),
  neuterPast: Word('вырядилось', 1),
  pluralPast: Word('вырядились', 1),
  imperativeInformal: Word('вырядись', 1),
  imperativeFormal: Word('вырядитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вырядиться.name.text, вырядиться);

export { вырядиться };