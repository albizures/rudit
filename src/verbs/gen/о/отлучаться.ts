import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлучаться: PerfectVerb = {
  name: Word('отлучаться', 5),
  singular1stPerson: Word('отлучаюсь', 5),
  singular2ndPerson: Word('отлучаешься', 5),
  singular3rdPerson: Word('отлучается', 5),
  plural1stPerson: Word('отлучаемся', 5),
  plural2ndPerson: Word('отлучаетесь', 5),
  plural3rdPerson: Word('отлучаются', 5),
  masculinePast: Word('отлучался', 5),
  femininePast: Word('отлучалась', 5),
  neuterPast: Word('отлучалось', 5),
  pluralPast: Word('отлучались', 5),
  imperativeInformal: Word('отлучайся', 5),
  imperativeFormal: Word('отлучайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отлучаться.name.text, отлучаться);

export { отлучаться };