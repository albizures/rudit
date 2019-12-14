import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дождаться: PerfectVerb = {
  name: Word('дождаться', 4),
  singular1stPerson: Word('дождалаю'сь', 6),
  singular2ndPerson: Word('дождалаёшься', 6),
  singular3rdPerson: Word('дождалаётся', 6),
  plural1stPerson: Word('дождалаёмся', 6),
  plural2ndPerson: Word('дождалаётесь', 6),
  plural3rdPerson: Word('дождалаю'тся', 6),
  masculinePast: Word('дождался', 4),
  femininePast: Word('дождалась', 4),
  neuterPast: Word('дождалось', 4),
  pluralPast: Word('дождались', 4),
  imperativeInformal: Word('дождалаи'сь', 6),
  imperativeFormal: Word('дождалаи'тесь', 6),
  imperfect: ['дожидаться'],
};

perfectVerbs.set(дождаться.name.text, дождаться);

export { дождаться };