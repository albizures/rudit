import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокормиться: PerfectVerb = {
  name: Word('прокормиться', 7),
  singular1stPerson: Word('прокормлюсь', 8),
  singular2ndPerson: Word('прокормишься', 4),
  singular3rdPerson: Word('прокормится', 4),
  plural1stPerson: Word('прокормимся', 4),
  plural2ndPerson: Word('прокормитесь', 4),
  plural3rdPerson: Word('прокормятся', 4),
  masculinePast: Word('прокормился', 7),
  femininePast: Word('прокормилась', 7),
  neuterPast: Word('прокормилось', 7),
  pluralPast: Word('прокормились', 7),
  imperativeInformal: Word('прокормись', 7),
  imperativeFormal: Word('прокормитесь', 7),
  imperfect: [],
};

perfectVerbs.set(прокормиться.name.text, прокормиться);

export { прокормиться };