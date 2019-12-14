import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похмеляться: PerfectVerb = {
  name: Word('похмеляться', 6),
  singular1stPerson: Word('похмеляюсь', 6),
  singular2ndPerson: Word('похмеляешься', 6),
  singular3rdPerson: Word('похмеляется', 6),
  plural1stPerson: Word('похмеляемся', 6),
  plural2ndPerson: Word('похмеляетесь', 6),
  plural3rdPerson: Word('похмеляются', 6),
  masculinePast: Word('похмелялся', 6),
  femininePast: Word('похмелялась', 6),
  neuterPast: Word('похмелялось', 6),
  pluralPast: Word('похмелялись', 6),
  imperativeInformal: Word('похмеляйся', 6),
  imperativeFormal: Word('похмеляйтесь', 6),
  imperfect: ['опохмелиться','похмелиться'],
};

perfectVerbs.set(похмеляться.name.text, похмеляться);

export { похмеляться };