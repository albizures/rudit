import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрямиться: PerfectVerb = {
  name: Word('выпрямиться', 1),
  singular1stPerson: Word('выпрямлюсь', 1),
  singular2ndPerson: Word('выпрямишься', 1),
  singular3rdPerson: Word('выпрямится', 1),
  plural1stPerson: Word('выпрямимся', 1),
  plural2ndPerson: Word('выпрямитесь', 1),
  plural3rdPerson: Word('выпрямятся', 1),
  masculinePast: Word('выпрямился', 1),
  femininePast: Word('выпрямилась', 1),
  neuterPast: Word('выпрямилось', 1),
  pluralPast: Word('выпрямились', 1),
  imperativeInformal: Word('выпрямись', 1),
  imperativeFormal: Word('выпрямитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выпрямиться.name.text, выпрямиться);

export { выпрямиться };