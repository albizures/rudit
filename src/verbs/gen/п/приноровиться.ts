import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приноровиться: PerfectVerb = {
  name: Word('приноровиться', 8),
  singular1stPerson: Word('приноровлюсь', 9),
  singular2ndPerson: Word('приноровишься', 8),
  singular3rdPerson: Word('приноровится', 8),
  plural1stPerson: Word('приноровимся', 8),
  plural2ndPerson: Word('приноровитесь', 8),
  plural3rdPerson: Word('приноровятся', 8),
  masculinePast: Word('приноровился', 8),
  femininePast: Word('приноровилась', 8),
  neuterPast: Word('приноровилось', 8),
  pluralPast: Word('приноровились', 8),
  imperativeInformal: Word('приноровись', 8),
  imperativeFormal: Word('приноровитесь', 8),
  imperfect: [],
};

perfectVerbs.set(приноровиться.name.text, приноровиться);

export { приноровиться };