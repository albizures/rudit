import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокататься: PerfectVerb = {
  name: Word('прокататься', 6),
  singular1stPerson: Word('прокатаюсь', 6),
  singular2ndPerson: Word('прокатаешься', 6),
  singular3rdPerson: Word('прокатается', 6),
  plural1stPerson: Word('прокатаемся', 6),
  plural2ndPerson: Word('прокатаетесь', 6),
  plural3rdPerson: Word('прокатаются', 6),
  masculinePast: Word('прокатался', 6),
  femininePast: Word('прокаталась', 6),
  neuterPast: Word('прокаталось', 6),
  pluralPast: Word('прокатались', 6),
  imperativeInformal: Word('прокатайся', 6),
  imperativeFormal: Word('прокатайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прокататься.name.text, прокататься);

export { прокататься };