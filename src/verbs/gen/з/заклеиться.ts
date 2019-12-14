import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклеиться: PerfectVerb = {
  name: Word('заклеиться', 4),
  singular1stPerson: Word('заклеюсь', 4),
  singular2ndPerson: Word('заклеишься', 4),
  singular3rdPerson: Word('заклеится', 4),
  plural1stPerson: Word('заклеимся', 4),
  plural2ndPerson: Word('заклеитесь', 4),
  plural3rdPerson: Word('заклеятся', 4),
  masculinePast: Word('заклеился', 4),
  femininePast: Word('заклеилась', 4),
  neuterPast: Word('заклеилось', 4),
  pluralPast: Word('заклеились', 4),
  imperativeInformal: Word('заклейся', 4),
  imperativeFormal: Word('заклейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заклеиться.name.text, заклеиться);

export { заклеиться };