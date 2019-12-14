import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похмелиться: PerfectVerb = {
  name: Word('похмелиться', 6),
  singular1stPerson: Word('похмелюсь', 6),
  singular2ndPerson: Word('похмелишься', 6),
  singular3rdPerson: Word('похмелится', 6),
  plural1stPerson: Word('похмелимся', 6),
  plural2ndPerson: Word('похмелитесь', 6),
  plural3rdPerson: Word('похмелятся', 6),
  masculinePast: Word('похмелился', 6),
  femininePast: Word('похмелилась', 6),
  neuterPast: Word('похмелилось', 6),
  pluralPast: Word('похмелились', 6),
  imperativeInformal: Word('похмелись', 6),
  imperativeFormal: Word('похмелитесь', 6),
  imperfect: ['похмеляться'],
};

perfectVerbs.set(похмелиться.name.text, похмелиться);

export { похмелиться };