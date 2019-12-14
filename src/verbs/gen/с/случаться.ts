import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const случаться: PerfectVerb = {
  name: Word('случаться', 4),
  singular1stPerson: Word('случаюсь', 4),
  singular2ndPerson: Word('случаешься', 4),
  singular3rdPerson: Word('случается', 4),
  plural1stPerson: Word('случаемся', 4),
  plural2ndPerson: Word('случаетесь', 4),
  plural3rdPerson: Word('случаются', 4),
  masculinePast: Word('случался', 4),
  femininePast: Word('случалась', 4),
  neuterPast: Word('случалось', 4),
  pluralPast: Word('случались', 4),
  imperativeInformal: Word('случайся', 4),
  imperativeFormal: Word('случайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(случаться.name.text, случаться);

export { случаться };