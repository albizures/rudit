import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ханжить: PerfectVerb = {
  name: Word('ханжить', 4),
  singular1stPerson: Word('ханжу', 4),
  singular2ndPerson: Word('ханжишь', 4),
  singular3rdPerson: Word('ханжит', 4),
  plural1stPerson: Word('ханжим', 4),
  plural2ndPerson: Word('ханжите', 4),
  plural3rdPerson: Word('ханжат', 4),
  masculinePast: Word('ханжил', 4),
  femininePast: Word('ханжила', 4),
  neuterPast: Word('ханжило', 4),
  pluralPast: Word('ханжили', 4),
  imperativeInformal: Word('ханжи', 4),
  imperativeFormal: Word('ханжите', 4),
  imperfect: [],
};

perfectVerbs.set(ханжить.name.text, ханжить);

export { ханжить };