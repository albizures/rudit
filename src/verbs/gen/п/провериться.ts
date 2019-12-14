import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провериться: PerfectVerb = {
  name: Word('провериться', 4),
  singular1stPerson: Word('проверюсь', 4),
  singular2ndPerson: Word('проверишься', 4),
  singular3rdPerson: Word('проверится', 4),
  plural1stPerson: Word('проверимся', 4),
  plural2ndPerson: Word('проверитесь', 4),
  plural3rdPerson: Word('проверятся', 4),
  masculinePast: Word('проверился', 4),
  femininePast: Word('проверилась', 4),
  neuterPast: Word('проверилось', 4),
  pluralPast: Word('проверились', 4),
  imperativeInformal: Word('проверься', 4),
  imperativeFormal: Word('проверьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(провериться.name.text, провериться);

export { провериться };