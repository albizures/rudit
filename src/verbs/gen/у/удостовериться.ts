import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостовериться: PerfectVerb = {
  name: Word('удостовериться', 7),
  singular1stPerson: Word('удостоверюсь', 7),
  singular2ndPerson: Word('удостоверишься', 7),
  singular3rdPerson: Word('удостоверится', 7),
  plural1stPerson: Word('удостоверимся', 7),
  plural2ndPerson: Word('удостоверитесь', 7),
  plural3rdPerson: Word('удостоверятся', 7),
  masculinePast: Word('удостоверился', 7),
  femininePast: Word('удостоверилась', 7),
  neuterPast: Word('удостоверилось', 7),
  pluralPast: Word('удостоверились', 7),
  imperativeInformal: Word('удостоверься', 7),
  imperativeFormal: Word('удостоверьтесь', 7),
  imperfect: ['удостоверяться'],
};

perfectVerbs.set(удостовериться.name.text, удостовериться);

export { удостовериться };