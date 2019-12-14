import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продлиться: PerfectVerb = {
  name: Word('продлиться', 5),
  singular1stPerson: Word('продлюсь', 5),
  singular2ndPerson: Word('продлишься', 5),
  singular3rdPerson: Word('продлится', 5),
  plural1stPerson: Word('продлимся', 5),
  plural2ndPerson: Word('продлитесь', 5),
  plural3rdPerson: Word('продлятся', 5),
  masculinePast: Word('продлился', 5),
  femininePast: Word('продлилась', 5),
  neuterPast: Word('продлилось', 5),
  pluralPast: Word('продлились', 5),
  imperativeInformal: Word('продлись', 5),
  imperativeFormal: Word('продлитесь', 5),
  imperfect: [],
};

perfectVerbs.set(продлиться.name.text, продлиться);

export { продлиться };