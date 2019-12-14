import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умудриться: PerfectVerb = {
  name: Word('умудриться', 5),
  singular1stPerson: Word('умудрюсь', 5),
  singular2ndPerson: Word('умудришься', 5),
  singular3rdPerson: Word('умудрится', 5),
  plural1stPerson: Word('умудримся', 5),
  plural2ndPerson: Word('умудритесь', 5),
  plural3rdPerson: Word('умудрятся', 5),
  masculinePast: Word('умудрился', 5),
  femininePast: Word('умудрилась', 5),
  neuterPast: Word('умудрилось', 5),
  pluralPast: Word('умудрились', 5),
  imperativeInformal: Word('умудрись', 5),
  imperativeFormal: Word('умудритесь', 5),
  imperfect: [],
};

perfectVerbs.set(умудриться.name.text, умудриться);

export { умудриться };