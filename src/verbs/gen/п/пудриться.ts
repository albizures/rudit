import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пудриться: PerfectVerb = {
  name: Word('пудриться', 1),
  singular1stPerson: Word('пудрюсь', 1),
  singular2ndPerson: Word('пудришься', 1),
  singular3rdPerson: Word('пудрится', 1),
  plural1stPerson: Word('пудримся', 1),
  plural2ndPerson: Word('пудритесь', 1),
  plural3rdPerson: Word('пудрятся', 1),
  masculinePast: Word('пудрился', 1),
  femininePast: Word('пудрилась', 1),
  neuterPast: Word('пудрилось', 1),
  pluralPast: Word('пудрились', 1),
  imperativeInformal: Word('пудрись', 1),
  imperativeFormal: Word('пудритесь', 1),
  imperfect: [],
};

perfectVerbs.set(пудриться.name.text, пудриться);

export { пудриться };