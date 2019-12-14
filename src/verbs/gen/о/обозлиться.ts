import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозлиться: PerfectVerb = {
  name: Word('обозлиться', 5),
  singular1stPerson: Word('обозлюсь', 5),
  singular2ndPerson: Word('обозлишься', 5),
  singular3rdPerson: Word('обозлится', 5),
  plural1stPerson: Word('обозлимся', 5),
  plural2ndPerson: Word('обозлитесь', 5),
  plural3rdPerson: Word('обозлятся', 5),
  masculinePast: Word('обозлился', 5),
  femininePast: Word('обозлилась', 5),
  neuterPast: Word('обозлилось', 5),
  pluralPast: Word('обозлились', 5),
  imperativeInformal: Word('обозлись', 5),
  imperativeFormal: Word('обозлитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обозлиться.name.text, обозлиться);

export { обозлиться };