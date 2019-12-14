import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспроизводиться: PerfectVerb = {
  name: Word('воспроизводиться', 11),
  singular1stPerson: Word('воспроизвожусь', 11),
  singular2ndPerson: Word('воспроизводишься', 9),
  singular3rdPerson: Word('воспроизводится', 9),
  plural1stPerson: Word('воспроизводимся', 9),
  plural2ndPerson: Word('воспроизводитесь', 9),
  plural3rdPerson: Word('воспроизводятся', 9),
  masculinePast: Word('воспроизводился', 11),
  femininePast: Word('воспроизводилась', 11),
  neuterPast: Word('воспроизводилось', 11),
  pluralPast: Word('воспроизводились', 11),
  imperativeInformal: Word('воспроизводись', 11),
  imperativeFormal: Word('воспроизводитесь', 11),
  imperfect: [],
};

perfectVerbs.set(воспроизводиться.name.text, воспроизводиться);

export { воспроизводиться };