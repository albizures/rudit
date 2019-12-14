import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заупрямиться: PerfectVerb = {
  name: Word('заупрямиться', 5),
  singular1stPerson: Word('заупрямлюсь', 5),
  singular2ndPerson: Word('заупрямишься', 5),
  singular3rdPerson: Word('заупрямится', 5),
  plural1stPerson: Word('заупрямимся', 5),
  plural2ndPerson: Word('заупрямитесь', 5),
  plural3rdPerson: Word('заупрямятся', 5),
  masculinePast: Word('заупрямился', 5),
  femininePast: Word('заупрямилась', 5),
  neuterPast: Word('заупрямилось', 5),
  pluralPast: Word('заупрямились', 5),
  imperativeInformal: Word('заупрямься', 5),
  imperativeFormal: Word('заупрямьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заупрямиться.name.text, заупрямиться);

export { заупрямиться };