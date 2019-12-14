import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостоверяться: PerfectVerb = {
  name: Word('удостоверяться', 9),
  singular1stPerson: Word('удостоверяюсь', 9),
  singular2ndPerson: Word('удостоверяешься', 9),
  singular3rdPerson: Word('удостоверяется', 9),
  plural1stPerson: Word('удостоверяемся', 9),
  plural2ndPerson: Word('удостоверяетесь', 9),
  plural3rdPerson: Word('удостоверяются', 9),
  masculinePast: Word('удостоверялся', 9),
  femininePast: Word('удостоверялась', 9),
  neuterPast: Word('удостоверялось', 9),
  pluralPast: Word('удостоверялись', 9),
  imperativeInformal: Word('удостоверяйся', 9),
  imperativeFormal: Word('удостоверяйтесь', 9),
  imperfect: ['удостовериться'],
};

perfectVerbs.set(удостоверяться.name.text, удостоверяться);

export { удостоверяться };