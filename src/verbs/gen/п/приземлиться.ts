import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приземлиться: PerfectVerb = {
  name: Word('приземлиться', 7),
  singular1stPerson: Word('приземлюсь', 7),
  singular2ndPerson: Word('приземлишься', 7),
  singular3rdPerson: Word('приземлится', 7),
  plural1stPerson: Word('приземлимся', 7),
  plural2ndPerson: Word('приземлитесь', 7),
  plural3rdPerson: Word('приземлятся', 7),
  masculinePast: Word('приземлился', 7),
  femininePast: Word('приземлилась', 7),
  neuterPast: Word('приземлилось', 7),
  pluralPast: Word('приземлились', 7),
  imperativeInformal: Word('приземлись', 7),
  imperativeFormal: Word('приземлитесь', 7),
  imperfect: ['приземляться'],
};

perfectVerbs.set(приземлиться.name.text, приземлиться);

export { приземлиться };