import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашиться: PerfectVerb = {
  name: Word('зашиться', 3),
  singular1stPerson: Word('зашьюсь', 4),
  singular2ndPerson: Word('зашьёшься', 4),
  singular3rdPerson: Word('зашьётся', 4),
  plural1stPerson: Word('зашьёмся', 4),
  plural2ndPerson: Word('зашьётесь', 4),
  plural3rdPerson: Word('зашьются', 4),
  masculinePast: Word('зашился', 3),
  femininePast: Word('зашилась', 3),
  neuterPast: Word('зашилось', 3),
  pluralPast: Word('зашились', 3),
  imperativeInformal: Word('зашейся', 3),
  imperativeFormal: Word('зашейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(зашиться.name.text, зашиться);

export { зашиться };