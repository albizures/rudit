import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разозлиться: PerfectVerb = {
  name: Word('разозлиться', 6),
  singular1stPerson: Word('разозлюсь', 6),
  singular2ndPerson: Word('разозлишься', 6),
  singular3rdPerson: Word('разозлится', 6),
  plural1stPerson: Word('разозлимся', 6),
  plural2ndPerson: Word('разозлитесь', 6),
  plural3rdPerson: Word('разозлятся', 6),
  masculinePast: Word('разозлился', 6),
  femininePast: Word('разозлилась', 6),
  neuterPast: Word('разозлилось', 6),
  pluralPast: Word('разозлились', 6),
  imperativeInformal: Word('разозлись', 6),
  imperativeFormal: Word('разозлитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разозлиться.name.text, разозлиться);

export { разозлиться };