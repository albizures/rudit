import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const научиться: PerfectVerb = {
  name: Word('научиться', 4),
  singular1stPerson: Word('научусь', 4),
  singular2ndPerson: Word('научишься', 2),
  singular3rdPerson: Word('научится', 2),
  plural1stPerson: Word('научимся', 2),
  plural2ndPerson: Word('научитесь', 2),
  plural3rdPerson: Word('научатся', 2),
  masculinePast: Word('научился', 4),
  femininePast: Word('научилась', 4),
  neuterPast: Word('научилось', 4),
  pluralPast: Word('научились', 4),
  imperativeInformal: Word('научись', 4),
  imperativeFormal: Word('научитесь', 4),
  imperfect: ['учиться'],
};

perfectVerbs.set(научиться.name.text, научиться);

export { научиться };