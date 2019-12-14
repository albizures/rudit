import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намылиться: PerfectVerb = {
  name: Word('намылиться', 3),
  singular1stPerson: Word('намылюсь', 3),
  singular2ndPerson: Word('намылишься', 3),
  singular3rdPerson: Word('намылится', 3),
  plural1stPerson: Word('намылимся', 3),
  plural2ndPerson: Word('намылитесь', 3),
  plural3rdPerson: Word('намылятся', 3),
  masculinePast: Word('намылился', 3),
  femininePast: Word('намылилась', 3),
  neuterPast: Word('намылилось', 3),
  pluralPast: Word('намылились', 3),
  imperativeInformal: Word('намылься', 3),
  imperativeFormal: Word('намыльтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намылиться.name.text, намылиться);

export { намылиться };