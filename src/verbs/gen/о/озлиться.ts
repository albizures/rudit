import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озлиться: PerfectVerb = {
  name: Word('озлиться', 3),
  singular1stPerson: Word('озлюсь', 3),
  singular2ndPerson: Word('озлишься', 3),
  singular3rdPerson: Word('озлится', 3),
  plural1stPerson: Word('озлимся', 3),
  plural2ndPerson: Word('озлитесь', 3),
  plural3rdPerson: Word('озлятся', 3),
  masculinePast: Word('озлился', 3),
  femininePast: Word('озлилась', 3),
  neuterPast: Word('озлилось', 3),
  pluralPast: Word('озлились', 3),
  imperativeInformal: Word('озлись', 3),
  imperativeFormal: Word('озлитесь', 3),
  imperfect: [],
};

perfectVerbs.set(озлиться.name.text, озлиться);

export { озлиться };