import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приклеиться: PerfectVerb = {
  name: Word('приклеиться', 5),
  singular1stPerson: Word('приклеюсь', 5),
  singular2ndPerson: Word('приклеишься', 5),
  singular3rdPerson: Word('приклеится', 5),
  plural1stPerson: Word('приклеимся', 5),
  plural2ndPerson: Word('приклеитесь', 5),
  plural3rdPerson: Word('приклеятся', 5),
  masculinePast: Word('приклеился', 5),
  femininePast: Word('приклеилась', 5),
  neuterPast: Word('приклеилось', 5),
  pluralPast: Word('приклеились', 5),
  imperativeInformal: Word('приклейся', 5),
  imperativeFormal: Word('приклейтесь', 5),
  imperfect: ['приклеиваться'],
};

perfectVerbs.set(приклеиться.name.text, приклеиться);

export { приклеиться };