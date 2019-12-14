import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раззудеться: PerfectVerb = {
  name: Word('раззудеться', 6),
  singular1stPerson: Word('раззужусь', 6),
  singular2ndPerson: Word('раззудишься', 6),
  singular3rdPerson: Word('раззудится', 6),
  plural1stPerson: Word('раззудимся', 6),
  plural2ndPerson: Word('раззудитесь', 6),
  plural3rdPerson: Word('раззудятся', 6),
  masculinePast: Word('раззуделся', 6),
  femininePast: Word('раззуделась', 6),
  neuterPast: Word('раззуделось', 6),
  pluralPast: Word('раззуделись', 6),
  imperativeInformal: Word('раззудись', 6),
  imperativeFormal: Word('раззудитесь', 6),
  imperfect: [],
};

perfectVerbs.set(раззудеться.name.text, раззудеться);

export { раззудеться };