import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const войти: PerfectVerb = {
  name: Word('войти', 4),
  singular1stPerson: Word('войду', 4),
  singular2ndPerson: Word('войдёшь', 1),
  singular3rdPerson: Word('войдёт', 1),
  plural1stPerson: Word('войдём', 1),
  plural2ndPerson: Word('войдёте', 6),
  plural3rdPerson: Word('войдут', 4),
  masculinePast: Word('вошёл', 1),
  femininePast: Word('вошла', 4),
  neuterPast: Word('вошло', 4),
  pluralPast: Word('вошли', 4),
  imperativeInformal: Word('войди', 4),
  imperativeFormal: Word('войдите', 4),
  imperfect: ['входить'],
};

perfectVerbs.set(войти.name.text, войти);

export { войти };