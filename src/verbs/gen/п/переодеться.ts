import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переодеться: PerfectVerb = {
  name: Word('переодеться', 6),
  singular1stPerson: Word('переоденусь', 6),
  singular2ndPerson: Word('переоденешься', 6),
  singular3rdPerson: Word('переоденется', 6),
  plural1stPerson: Word('переоденемся', 6),
  plural2ndPerson: Word('переоденетесь', 6),
  plural3rdPerson: Word('переоденутся', 6),
  masculinePast: Word('переоделся', 6),
  femininePast: Word('переоделась', 6),
  neuterPast: Word('переоделось', 6),
  pluralPast: Word('переоделись', 6),
  imperativeInformal: Word('переоденься', 6),
  imperativeFormal: Word('переоденьтесь', 6),
  imperfect: ['переодеваться'],
};

perfectVerbs.set(переодеться.name.text, переодеться);

export { переодеться };