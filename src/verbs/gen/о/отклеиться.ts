import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклеиться: PerfectVerb = {
  name: Word('отклеиться', 4),
  singular1stPerson: Word('отклеюсь', 4),
  singular2ndPerson: Word('отклеишься', 4),
  singular3rdPerson: Word('отклеится', 4),
  plural1stPerson: Word('отклеимся', 4),
  plural2ndPerson: Word('отклеитесь', 4),
  plural3rdPerson: Word('отклеятся', 4),
  masculinePast: Word('отклеился', 4),
  femininePast: Word('отклеилась', 4),
  neuterPast: Word('отклеилось', 4),
  pluralPast: Word('отклеились', 4),
  imperativeInformal: Word('отклейся', 4),
  imperativeFormal: Word('отклейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отклеиться.name.text, отклеиться);

export { отклеиться };