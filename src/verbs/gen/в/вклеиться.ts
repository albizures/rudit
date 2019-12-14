import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вклеиться: PerfectVerb = {
  name: Word('вклеиться', 3),
  singular1stPerson: Word('вклеюсь', 3),
  singular2ndPerson: Word('вклеишься', 3),
  singular3rdPerson: Word('вклеится', 3),
  plural1stPerson: Word('вклеимся', 3),
  plural2ndPerson: Word('вклеитесь', 3),
  plural3rdPerson: Word('вклеятся', 3),
  masculinePast: Word('вклеился', 3),
  femininePast: Word('вклеилась', 3),
  neuterPast: Word('вклеилось', 3),
  pluralPast: Word('вклеились', 3),
  imperativeInformal: Word('вклейся', 3),
  imperativeFormal: Word('вклейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вклеиться.name.text, вклеиться);

export { вклеиться };