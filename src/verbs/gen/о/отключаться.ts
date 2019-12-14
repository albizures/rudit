import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отключаться: PerfectVerb = {
  name: Word('отключаться', 6),
  singular1stPerson: Word('отключаюсь', 6),
  singular2ndPerson: Word('отключаешься', 6),
  singular3rdPerson: Word('отключается', 6),
  plural1stPerson: Word('отключаемся', 6),
  plural2ndPerson: Word('отключаетесь', 6),
  plural3rdPerson: Word('отключаются', 6),
  masculinePast: Word('отключался', 6),
  femininePast: Word('отключалась', 6),
  neuterPast: Word('отключалось', 6),
  pluralPast: Word('отключались', 6),
  imperativeInformal: Word('отключайся', 6),
  imperativeFormal: Word('отключайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(отключаться.name.text, отключаться);

export { отключаться };