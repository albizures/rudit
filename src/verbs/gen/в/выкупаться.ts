import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкупаться: PerfectVerb = {
  name: Word('выкупаться', 1),
  singular1stPerson: Word('выкупаюсь', 1),
  singular2ndPerson: Word('выкупаешься', 1),
  singular3rdPerson: Word('выкупается', 1),
  plural1stPerson: Word('выкупаемся', 1),
  plural2ndPerson: Word('выкупаетесь', 1),
  plural3rdPerson: Word('выкупаются', 1),
  masculinePast: Word('выкупался', 1),
  femininePast: Word('выкупалась', 1),
  neuterPast: Word('выкупалось', 1),
  pluralPast: Word('выкупались', 1),
  imperativeInformal: Word('выкупайся', 1),
  imperativeFormal: Word('выкупайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкупаться.name.text, выкупаться);

export { выкупаться };