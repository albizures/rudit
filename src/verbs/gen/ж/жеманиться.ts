import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жеманиться: PerfectVerb = {
  name: Word('жеманиться', 3),
  singular1stPerson: Word('жеманюсь', 3),
  singular2ndPerson: Word('жеманишься', 3),
  singular3rdPerson: Word('жеманится', 3),
  plural1stPerson: Word('жеманимся', 3),
  plural2ndPerson: Word('жеманитесь', 3),
  plural3rdPerson: Word('жеманятся', 3),
  masculinePast: Word('жеманился', 3),
  femininePast: Word('жеманилась', 3),
  neuterPast: Word('жеманилось', 3),
  pluralPast: Word('жеманились', 3),
  imperativeInformal: Word('жеманься', 3),
  imperativeFormal: Word('жеманьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(жеманиться.name.text, жеманиться);

export { жеманиться };