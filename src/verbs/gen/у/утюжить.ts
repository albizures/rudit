import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утюжить: PerfectVerb = {
  name: Word('утюжить', 2),
  singular1stPerson: Word('утюжу', 2),
  singular2ndPerson: Word('утюжишь', 2),
  singular3rdPerson: Word('утюжит', 2),
  plural1stPerson: Word('утюжим', 2),
  plural2ndPerson: Word('утюжите', 2),
  plural3rdPerson: Word('утюжат', 2),
  masculinePast: Word('утюжил', 2),
  femininePast: Word('утюжила', 2),
  neuterPast: Word('утюжило', 2),
  pluralPast: Word('утюжили', 2),
  imperativeInformal: Word('утюжь', 2),
  imperativeFormal: Word('утюжьте', 2),
  imperfect: [],
};

perfectVerbs.set(утюжить.name.text, утюжить);

export { утюжить };