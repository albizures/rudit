import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоединиться: PerfectVerb = {
  name: Word('воссоединиться', 9),
  singular1stPerson: Word('воссоединюсь', 9),
  singular2ndPerson: Word('воссоединишься', 9),
  singular3rdPerson: Word('воссоединится', 9),
  plural1stPerson: Word('воссоединимся', 9),
  plural2ndPerson: Word('воссоединитесь', 9),
  plural3rdPerson: Word('воссоединятся', 9),
  masculinePast: Word('воссоединился', 9),
  femininePast: Word('воссоединилась', 9),
  neuterPast: Word('воссоединилось', 9),
  pluralPast: Word('воссоединились', 9),
  imperativeInformal: Word('воссоединись', 9),
  imperativeFormal: Word('воссоединитесь', 9),
  imperfect: [],
};

perfectVerbs.set(воссоединиться.name.text, воссоединиться);

export { воссоединиться };