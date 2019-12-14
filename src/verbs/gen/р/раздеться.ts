import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздеться: PerfectVerb = {
  name: Word('раздеться', 4),
  singular1stPerson: Word('разденусь', 4),
  singular2ndPerson: Word('разденешься', 4),
  singular3rdPerson: Word('разденется', 4),
  plural1stPerson: Word('разденемся', 4),
  plural2ndPerson: Word('разденетесь', 4),
  plural3rdPerson: Word('разденутся', 4),
  masculinePast: Word('разделся', 4),
  femininePast: Word('разделась', 4),
  neuterPast: Word('разделось', 4),
  pluralPast: Word('разделись', 4),
  imperativeInformal: Word('разденься', 4),
  imperativeFormal: Word('разденьтесь', 4),
  imperfect: ['раздеваться'],
};

perfectVerbs.set(раздеться.name.text, раздеться);

export { раздеться };