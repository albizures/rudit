import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проспаться: PerfectVerb = {
  name: Word('проспаться', 5),
  singular1stPerson: Word('просплюсь', 6),
  singular2ndPerson: Word('проспишься', 5),
  singular3rdPerson: Word('проспится', 5),
  plural1stPerson: Word('проспимся', 5),
  plural2ndPerson: Word('проспитесь', 5),
  plural3rdPerson: Word('проспятся', 5),
  masculinePast: Word('проспался', 5),
  femininePast: Word('проспалась', 7),
  neuterPast: Word('проспалось//проспало'сь', 5),
  pluralPast: Word('проспались//проспали'сь', 5),
  imperativeInformal: Word('проспись', 5),
  imperativeFormal: Word('проспитесь', 5),
  imperfect: [],
};

perfectVerbs.set(проспаться.name.text, проспаться);

export { проспаться };