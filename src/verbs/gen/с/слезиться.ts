import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слезиться: PerfectVerb = {
  name: Word('слезиться', 4),
  singular1stPerson: Word('слежусь', 4),
  singular2ndPerson: Word('слезишься', 4),
  singular3rdPerson: Word('слезится', 4),
  plural1stPerson: Word('слезимся', 4),
  plural2ndPerson: Word('слезитесь', 4),
  plural3rdPerson: Word('слезятся', 4),
  masculinePast: Word('слезился', 4),
  femininePast: Word('слезилась', 4),
  neuterPast: Word('слезилось', 4),
  pluralPast: Word('слезились', 4),
  imperativeInformal: Word('слезись', 4),
  imperativeFormal: Word('слезитесь', 4),
  imperfect: [],
};

perfectVerbs.set(слезиться.name.text, слезиться);

export { слезиться };