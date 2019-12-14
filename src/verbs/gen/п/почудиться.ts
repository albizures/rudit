import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почудиться: PerfectVerb = {
  name: Word('почудиться', 3),
  singular1stPerson: Word('почужусь', 3),
  singular2ndPerson: Word('почудишься', 3),
  singular3rdPerson: Word('почудится', 3),
  plural1stPerson: Word('почудимся', 3),
  plural2ndPerson: Word('почудитесь', 3),
  plural3rdPerson: Word('почудятся', 3),
  masculinePast: Word('почудился', 3),
  femininePast: Word('почудилась', 3),
  neuterPast: Word('почудилось', 3),
  pluralPast: Word('почудились', 3),
  imperativeInformal: Word('почудься', 3),
  imperativeFormal: Word('почудьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(почудиться.name.text, почудиться);

export { почудиться };