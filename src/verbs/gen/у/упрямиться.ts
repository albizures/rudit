import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрямиться: PerfectVerb = {
  name: Word('упрямиться', 3),
  singular1stPerson: Word('упрямлюсь', 3),
  singular2ndPerson: Word('упрямишься', 3),
  singular3rdPerson: Word('упрямится', 3),
  plural1stPerson: Word('упрямимся', 3),
  plural2ndPerson: Word('упрямитесь', 3),
  plural3rdPerson: Word('упрямятся', 3),
  masculinePast: Word('упрямился', 3),
  femininePast: Word('упрямилась', 3),
  neuterPast: Word('упрямилось', 3),
  pluralPast: Word('упрямились', 3),
  imperativeInformal: Word('упрямься', 3),
  imperativeFormal: Word('упрямьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(упрямиться.name.text, упрямиться);

export { упрямиться };