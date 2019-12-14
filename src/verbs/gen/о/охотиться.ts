import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охотиться: PerfectVerb = {
  name: Word('охотиться', 2),
  singular1stPerson: Word('охочусь', 2),
  singular2ndPerson: Word('охотишься', 2),
  singular3rdPerson: Word('охотится', 2),
  plural1stPerson: Word('охотимся', 2),
  plural2ndPerson: Word('охотитесь', 2),
  plural3rdPerson: Word('охотятся', 2),
  masculinePast: Word('охотился', 2),
  femininePast: Word('охотилась', 2),
  neuterPast: Word('охотилось', 2),
  pluralPast: Word('охотились', 2),
  imperativeInformal: Word('охоться', 2),
  imperativeFormal: Word('охотьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(охотиться.name.text, охотиться);

export { охотиться };