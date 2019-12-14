import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нанюхаться: PerfectVerb = {
  name: Word('нанюхаться', 3),
  singular1stPerson: Word('нанюхаюсь', 3),
  singular2ndPerson: Word('нанюхаешься', 3),
  singular3rdPerson: Word('нанюхается', 3),
  plural1stPerson: Word('нанюхаемся', 3),
  plural2ndPerson: Word('нанюхаетесь', 3),
  plural3rdPerson: Word('нанюхаются', 3),
  masculinePast: Word('нанюхался', 3),
  femininePast: Word('нанюхалась', 3),
  neuterPast: Word('нанюхалось', 3),
  pluralPast: Word('нанюхались', 3),
  imperativeInformal: Word('нанюхайся', 3),
  imperativeFormal: Word('нанюхайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нанюхаться.name.text, нанюхаться);

export { нанюхаться };