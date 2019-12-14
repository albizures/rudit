import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излучаться: PerfectVerb = {
  name: Word('излучаться', 5),
  singular1stPerson: Word('излучаюсь', 5),
  singular2ndPerson: Word('излучаешься', 5),
  singular3rdPerson: Word('излучается', 5),
  plural1stPerson: Word('излучаемся', 5),
  plural2ndPerson: Word('излучаетесь', 5),
  plural3rdPerson: Word('излучаются', 5),
  masculinePast: Word('излучался', 5),
  femininePast: Word('излучалась', 5),
  neuterPast: Word('излучалось', 5),
  pluralPast: Word('излучались', 5),
  imperativeInformal: Word('излучайся', 5),
  imperativeFormal: Word('излучайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(излучаться.name.text, излучаться);

export { излучаться };