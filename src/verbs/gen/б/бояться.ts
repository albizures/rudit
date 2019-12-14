import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бояться: PerfectVerb = {
  name: Word('бояться', 2),
  singular1stPerson: Word('боюсь', 2),
  singular2ndPerson: Word('боишься', 2),
  singular3rdPerson: Word('боится', 2),
  plural1stPerson: Word('боимся', 2),
  plural2ndPerson: Word('боитесь', 2),
  plural3rdPerson: Word('боятся', 2),
  masculinePast: Word('боялся', 2),
  femininePast: Word('боялась', 2),
  neuterPast: Word('боялось', 2),
  pluralPast: Word('боялись', 2),
  imperativeInformal: Word('бойся', 1),
  imperativeFormal: Word('бойтесь', 1),
  imperfect: ['забояться'],
};

perfectVerbs.set(бояться.name.text, бояться);

export { бояться };