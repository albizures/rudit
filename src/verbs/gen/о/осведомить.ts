import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осведомить: PerfectVerb = {
  name: Word('осведомить', 3),
  singular1stPerson: Word('осведомлю', 3),
  singular2ndPerson: Word('осведомишь', 3),
  singular3rdPerson: Word('осведомит', 3),
  plural1stPerson: Word('осведомим', 3),
  plural2ndPerson: Word('осведомите', 3),
  plural3rdPerson: Word('осведомят', 3),
  masculinePast: Word('осведомил', 3),
  femininePast: Word('осведомила', 3),
  neuterPast: Word('осведомило', 3),
  pluralPast: Word('осведомили', 3),
  imperativeInformal: Word('осведоми//осве'домь', 3),
  imperativeFormal: Word('осведомьте', 3),
  imperfect: [],
};

perfectVerbs.set(осведомить.name.text, осведомить);

export { осведомить };