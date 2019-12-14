import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предвидеться: PerfectVerb = {
  name: Word('предвидеться', 5),
  singular1stPerson: Word('предвижусь', 5),
  singular2ndPerson: Word('предвидишься', 5),
  singular3rdPerson: Word('предвидится', 5),
  plural1stPerson: Word('предвидимся', 5),
  plural2ndPerson: Word('предвидитесь', 5),
  plural3rdPerson: Word('предвидятся', 5),
  masculinePast: Word('предвиделся', 5),
  femininePast: Word('предвиделась', 5),
  neuterPast: Word('предвиделось', 5),
  pluralPast: Word('предвиделись', 5),
  imperativeInformal: Word('предвидься', 5),
  imperativeFormal: Word('предвидьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(предвидеться.name.text, предвидеться);

export { предвидеться };