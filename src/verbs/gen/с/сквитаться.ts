import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сквитаться: PerfectVerb = {
  name: Word('сквитаться', 5),
  singular1stPerson: Word('сквитаюсь', 5),
  singular2ndPerson: Word('сквитаешься', 5),
  singular3rdPerson: Word('сквитается', 5),
  plural1stPerson: Word('сквитаемся', 5),
  plural2ndPerson: Word('сквитаетесь', 5),
  plural3rdPerson: Word('сквитаются', 5),
  masculinePast: Word('сквитался', 5),
  femininePast: Word('сквиталась', 5),
  neuterPast: Word('сквиталось', 5),
  pluralPast: Word('сквитались', 5),
  imperativeInformal: Word('сквитайся', 5),
  imperativeFormal: Word('сквитайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сквитаться.name.text, сквитаться);

export { сквитаться };