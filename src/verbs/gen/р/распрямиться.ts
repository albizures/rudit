import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распрямиться: PerfectVerb = {
  name: Word('распрямиться', 7),
  singular1stPerson: Word('распрямлюсь', 8),
  singular2ndPerson: Word('распрямишься', 7),
  singular3rdPerson: Word('распрямится', 7),
  plural1stPerson: Word('распрямимся', 7),
  plural2ndPerson: Word('распрямитесь', 7),
  plural3rdPerson: Word('распрямятся', 7),
  masculinePast: Word('распрямился', 7),
  femininePast: Word('распрямилась', 7),
  neuterPast: Word('распрямилось', 7),
  pluralPast: Word('распрямились', 7),
  imperativeInformal: Word('распрямись', 7),
  imperativeFormal: Word('распрямитесь', 7),
  imperfect: [],
};

perfectVerbs.set(распрямиться.name.text, распрямиться);

export { распрямиться };