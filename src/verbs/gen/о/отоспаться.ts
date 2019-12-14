import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отоспаться: PerfectVerb = {
  name: Word('отоспаться', 5),
  singular1stPerson: Word('отосплюсь', 6),
  singular2ndPerson: Word('отоспишься', 5),
  singular3rdPerson: Word('отоспится', 5),
  plural1stPerson: Word('отоспимся', 5),
  plural2ndPerson: Word('отоспитесь', 5),
  plural3rdPerson: Word('отоспятся', 5),
  masculinePast: Word('отоспался', 5),
  femininePast: Word('отоспалась', 7),
  neuterPast: Word('отоспалось//отоспало'сь', 5),
  pluralPast: Word('отоспались//отоспали'сь', 5),
  imperativeInformal: Word('отоспись', 5),
  imperativeFormal: Word('отоспитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отоспаться.name.text, отоспаться);

export { отоспаться };