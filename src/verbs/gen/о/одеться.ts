import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одеться: PerfectVerb = {
  name: Word('одеться', 2),
  singular1stPerson: Word('оденусь', 2),
  singular2ndPerson: Word('оденешься', 2),
  singular3rdPerson: Word('оденется', 2),
  plural1stPerson: Word('оденемся', 2),
  plural2ndPerson: Word('оденетесь', 2),
  plural3rdPerson: Word('оденутся', 2),
  masculinePast: Word('оделся', 2),
  femininePast: Word('оделась', 2),
  neuterPast: Word('оделось', 2),
  pluralPast: Word('оделись', 2),
  imperativeInformal: Word('оденься', 2),
  imperativeFormal: Word('оденьтесь', 2),
  imperfect: ['одеваться'],
};

perfectVerbs.set(одеться.name.text, одеться);

export { одеться };