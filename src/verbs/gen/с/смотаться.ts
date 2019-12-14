import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смотаться: PerfectVerb = {
  name: Word('смотаться', 4),
  singular1stPerson: Word('смотаюсь', 4),
  singular2ndPerson: Word('смотаешься', 4),
  singular3rdPerson: Word('смотается', 4),
  plural1stPerson: Word('смотаемся', 4),
  plural2ndPerson: Word('смотаетесь', 4),
  plural3rdPerson: Word('смотаются', 4),
  masculinePast: Word('смотался', 4),
  femininePast: Word('смоталась', 4),
  neuterPast: Word('смоталось', 4),
  pluralPast: Word('смотались', 4),
  imperativeInformal: Word('смотайся', 4),
  imperativeFormal: Word('смотайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(смотаться.name.text, смотаться);

export { смотаться };